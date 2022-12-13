package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"thesis/x/thesis/types"
)

func (k msgServer) CreateRoles(goCtx context.Context, msg *types.MsgCreateRoles) (*types.MsgCreateRolesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetRoles(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var roles = types.Roles{
		Creator: msg.Creator,
		Index:   msg.Index,
		Admins:  msg.Admins,
		Editors: msg.Editors,
		Signers: msg.Signers,
		Viewers: msg.Viewers,
	}

	k.SetRoles(
		ctx,
		roles,
	)
	return &types.MsgCreateRolesResponse{}, nil
}

func (k msgServer) UpdateRoles(goCtx context.Context, msg *types.MsgUpdateRoles) (*types.MsgUpdateRolesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRoles(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var roles = types.Roles{
		Creator: msg.Creator,
		Index:   msg.Index,
		Admins:  msg.Admins,
		Editors: msg.Editors,
		Signers: msg.Signers,
		Viewers: msg.Viewers,
	}

	k.SetRoles(ctx, roles)

	return &types.MsgUpdateRolesResponse{}, nil
}

func (k msgServer) DeleteRoles(goCtx context.Context, msg *types.MsgDeleteRoles) (*types.MsgDeleteRolesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRoles(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRoles(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteRolesResponse{}, nil
}
