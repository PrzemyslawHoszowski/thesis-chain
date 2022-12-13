package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) AddCertificate(goCtx context.Context, msg *types.MsgAddCertificate) (*types.MsgAddCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var certificate = types.Certificate{
		Creator: msg.Creator,
		Hash:    msg.Hash,
		Address: msg.Address,
	}

	id := k.AppendCertificate(ctx, certificate)

	return &types.MsgAddCertificateResponse{Id: id}, nil
}
