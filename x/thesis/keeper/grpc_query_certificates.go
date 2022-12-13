package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"thesis/x/thesis/types"
)

func (k Keeper) Certificates(goCtx context.Context, req *types.QueryCertificatesRequest) (*types.QueryCertificatesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var certs []*types.Certificate

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)

	certStore := prefix.NewStore(store, []byte(types.CertificateKey))

	pageRes, err := query.Paginate(certStore, req.Pagination, func(key []byte, value []byte) error {
		var cert types.Certificate
		if err := k.cdc.Unmarshal(value, &cert); err != nil {
			return err
		}

		certs = append(certs, &cert)

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryCertificatesResponse{Certificate: certs, Pagination: pageRes}, nil
}
