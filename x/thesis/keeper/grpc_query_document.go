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

func (k Keeper) DocumentAll(c context.Context, req *types.QueryAllDocumentRequest) (*types.QueryAllDocumentResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var documents []types.Document
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	documentStore := prefix.NewStore(store, types.KeyPrefix(types.DocumentKeyPrefix))

	pageRes, err := query.Paginate(documentStore, req.Pagination, func(key []byte, value []byte) error {
		var document types.Document
		if err := k.cdc.Unmarshal(value, &document); err != nil {
			return err
		}

		documents = append(documents, document)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDocumentResponse{Document: documents, Pagination: pageRes}, nil
}

func (k Keeper) Document(c context.Context, req *types.QueryGetDocumentRequest) (*types.QueryGetDocumentResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetDocument(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetDocumentResponse{Document: val}, nil
}
