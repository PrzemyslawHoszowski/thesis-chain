package keeper

import (
	"context"
	"encoding/base64"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

func verifyFiles(files []string) bool {
	for _, s := range files {
		_, error := base64.StdEncoding.DecodeString(s)
		if error != nil {
			return false
		}
	}
	return true
}

func (k msgServer) CreateDocument(goCtx context.Context, msg *types.MsgCreateDocument) (*types.MsgCreateDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}
	if !verifyFiles(msg.Files) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Files hashes must be in base64")
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
		LastEditHeight:  ctx.BlockHeight(),
	}

	k.Keeper.SetDocument(ctx, document)

	systemInfo.NextDocumentId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.DocumentCreatedEvent,
			sdk.NewAttribute(types.Caller, msg.Creator),
			sdk.NewAttribute(types.DocumentFiles, strings.Join(msg.Files, ",")),
			sdk.NewAttribute(types.DocumentId, newIndex),
		),
	)

	return &types.MsgCreateDocumentResponse{Id: newIndexInt}, nil
}
