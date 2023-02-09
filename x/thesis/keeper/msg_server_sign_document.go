package keeper

import (
	"context"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"k8s.io/utils/strings/slices"
	"strconv"
	"thesis/x/thesis/types"
)

func (k msgServer) SignDocument(goCtx context.Context, msg *types.MsgSignDocument) (*types.MsgSignDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	document, found := k.GetDocument(ctx, msg.DocumentId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Document not found")
	}
	if document.State != "Signing" && document.State != "Editing" {
		return nil, sdkerrors.Wrap(types.ErrInvalidState, "Document can be signed only during Editing/Signing state")
	}
	if slices.Contains(document.Signed, msg.Creator) {
		return nil, sdkerrors.Wrap(types.ErrAlreadySigned, fmt.Sprintf("Document already signed by %s", msg.Creator))
	}
	if !(slices.Contains(document.Signers, msg.Creator)) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Tx signer is not authorized to this action")
	}

	document.Signed = append(document.Signed, msg.Creator)
	document.State = "Signing"
	if len(document.Signed) == len(document.Signers) {
		document.State = "Signed"
	}
	k.SetDocument(ctx, document)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.DocumentSigned,
			sdk.NewAttribute(types.Caller, msg.Creator),
			sdk.NewAttribute(types.DocumentId, msg.DocumentId),
		),
	)

	index, _ := strconv.ParseUint(document.Index, 10, 64)
	return &types.MsgSignDocumentResponse{Id: index}, nil
}
