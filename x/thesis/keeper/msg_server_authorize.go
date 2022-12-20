package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) Authorize(goCtx context.Context, msg *types.MsgAuthorize) (*types.MsgAuthorizeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}

	newIndexInt := systemInfo.GetNextAuthorizeId()
	newIndex := strconv.FormatUint(newIndexInt, 10)

	authorization := types.AuthorizeAccount{
		Index:     newIndex,
		AccountId: msg.AccountId,
		Address:   msg.Creator,
	}

	k.Keeper.SetAuthorizeAccount(ctx, authorization)

	systemInfo.NextAuthorizeId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)

	return &types.MsgAuthorizeResponse{Id: newIndexInt}, nil

}
