package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"thesis/x/thesis/types"
)

func (k Keeper) AuthorizeAccountAll(c context.Context, req *types.QueryAllAuthorizeAccountRequest) (*types.QueryAllAuthorizeAccountResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var authorizeAccounts []types.AuthorizeAccount
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	authorizeAccountStore := prefix.NewStore(store, types.KeyPrefix(types.AuthorizeAccountKeyPrefix))

	pageRes, err := query.Paginate(authorizeAccountStore, req.Pagination, func(key []byte, value []byte) error {
		var authorizeAccount types.AuthorizeAccount
		if err := k.cdc.Unmarshal(value, &authorizeAccount); err != nil {
			return err
		}

		authorizeAccounts = append(authorizeAccounts, authorizeAccount)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAuthorizeAccountResponse{AuthorizeAccount: authorizeAccounts, Pagination: pageRes}, nil
}

func (k Keeper) AuthorizeAccount(c context.Context, req *types.QueryGetAuthorizeAccountRequest) (*types.QueryGetAuthorizeAccountResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAuthorizeAccount(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetAuthorizeAccountResponse{AuthorizeAccount: val}, nil
}
