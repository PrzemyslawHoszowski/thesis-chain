package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"k8s.io/utils/strings/slices"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) RejectDocument(goCtx context.Context, msg *types.MsgRejectDocument) (*types.MsgRejectDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	document, found := k.GetDocument(ctx, msg.DocumentId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Document not found")
	}

	if document.State != "Signed" {
		return nil, sdkerrors.Wrap(types.ErrInvalidState, "Signed document can't be rejected")
	}

	if !(slices.Contains(document.Admins, msg.Creator)) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Tx signer is not authorized to this action")
	}

	document.State = "Rejected"
	document.RejectionReason = msg.Reason
	k.SetDocument(ctx, document)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.DocumentRejected,
			sdk.NewAttribute(types.Caller, msg.Creator),
			sdk.NewAttribute(types.DocumentId, msg.DocumentId),
		),
	)
	index, _ := strconv.ParseUint(document.Index, 10, 64)
	return &types.MsgRejectDocumentResponse{Id: index}, nil

	return &types.MsgRejectDocumentResponse{}, nil
}
