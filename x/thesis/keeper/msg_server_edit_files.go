package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"k8s.io/utils/strings/slices"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) EditFiles(goCtx context.Context, msg *types.MsgEditFiles) (*types.MsgEditFilesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	document, found := k.GetDocument(ctx, msg.DocumentId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Document not found")
	}

	if !(slices.Contains(document.Admins, msg.Creator) || slices.Contains(document.Editors, msg.Creator)) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Tx signer is not authorized to this action")
	}
	if document.State != "Editing" {
		return nil, sdkerrors.Wrap(types.ErrInvalidState, "Document can be edited only during editing state")
	}

	document.Files = msg.Files
	k.SetDocument(ctx, document)
	index, _ := strconv.ParseUint(document.Index, 10, 64)
	return &types.MsgEditFilesResponse{Id: index}, nil
}
