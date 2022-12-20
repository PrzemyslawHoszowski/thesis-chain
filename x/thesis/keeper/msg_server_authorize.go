package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)
import "github.com/satori/go.uuid"

func IsValidUUID(u string) bool {
	_, err := uuid.FromString(u)
	return err == nil
}

func (k msgServer) Authorize(goCtx context.Context, msg *types.MsgAuthorize) (*types.MsgAuthorizeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}

	if !IsValidUUID(msg.AccountId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "AccountId should be uuid")
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
