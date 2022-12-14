package keeper

import (
	"context"
	"fmt"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"k8s.io/utils/strings/slices"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) RejectSignature(goCtx context.Context, msg *types.MsgRejectSignature) (*types.MsgRejectSignatureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	document, found := k.GetDocument(ctx, msg.DocumentId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Document not found")
	}

	if document.State != "Signing" {
		return nil, sdkerrors.Wrap(types.ErrInvalidState, "Signature can be rejected only during signing state")
	}

	if slices.Contains(document.Signers, msg.Creator) || slices.Contains(document.Admins, msg.Creator) {
		return nil, sdkerrors.Wrap(types.ErrAlreadySigned, fmt.Sprintf("Document already signed by %s", msg.Creator))
	}

	if !(slices.Contains(document.Signers, msg.Creator)) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Tx signer is not authorized to this action")
	}

	document.Signed = []string{}
	document.State = "Editing"
	k.SetDocument(ctx, document)
	index, _ := strconv.ParseUint(document.Index, 10, 64)
	return &types.MsgRejectSignatureResponse{Id: index}, nil
}
