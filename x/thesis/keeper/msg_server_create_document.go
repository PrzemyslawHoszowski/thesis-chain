package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func (k msgServer) CreateDocument(goCtx context.Context, msg *types.MsgCreateDocument) (*types.MsgCreateDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}

	newIndexInt := systemInfo.NextDocumentId
	newIndex := strconv.FormatUint(newIndexInt, 10)

	document := types.Document{
		Index:           newIndex,
		State:           "Editing",
		Files:           msg.Files,
		Admins:          []string{msg.Creator},
		Editors:         []string{},
		Signers:         []string{},
		Viewers:         []string{},
		Signed:          []string{},
		RejectionReason: "",
	}

	k.Keeper.SetDocument(ctx, document)

	systemInfo.NextDocumentId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)

	return &types.MsgCreateDocumentResponse{Id: newIndexInt}, nil
}
