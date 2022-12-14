package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) SignDocument(goCtx context.Context, msg *types.MsgSignDocument) (*types.MsgSignDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSignDocumentResponse{}, nil
}
