package keeper

import (
	"context"
	"strconv"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) AckFiles(goCtx context.Context, msg *types.MsgAckFiles) (*types.MsgAckFilesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.FileAcknowledged,
			sdk.NewAttribute(types.Caller, msg.Creator),
			sdk.NewAttribute(types.DocumentId, strconv.FormatUint(msg.Doc, 10)),
			sdk.NewAttribute(types.AcknowledgedFiles, strings.Join(msg.Files, ",")),
		),
	)
	return &types.MsgAckFilesResponse{}, nil
}
