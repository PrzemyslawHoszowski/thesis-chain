package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"thesis/x/documents/types"
)

func (k Keeper) RolesAll(c context.Context, req *types.QueryAllRolesRequest) (*types.QueryAllRolesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var roless []types.Roles
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	rolesStore := prefix.NewStore(store, types.KeyPrefix(types.RolesKeyPrefix))

	pageRes, err := query.Paginate(rolesStore, req.Pagination, func(key []byte, value []byte) error {
		var roles types.Roles
		if err := k.cdc.Unmarshal(value, &roles); err != nil {
			return err
		}

		roless = append(roless, roles)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRolesResponse{Roles: roless, Pagination: pageRes}, nil
}

func (k Keeper) Roles(c context.Context, req *types.QueryGetRolesRequest) (*types.QueryGetRolesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetRoles(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetRolesResponse{Roles: val}, nil
}
