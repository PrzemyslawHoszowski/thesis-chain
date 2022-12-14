package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) EditFiles(goCtx context.Context, msg *types.MsgEditFiles) (*types.MsgEditFilesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgEditFilesResponse{}, nil
}
