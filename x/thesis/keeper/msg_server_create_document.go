package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	docTypes "thesis/x/documents/types"
	"thesis/x/thesis/types"
)

func (k msgServer) CreateDocument(goCtx context.Context, msg *types.MsgCreateDocument) (*types.MsgCreateDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	roles := docTypes.Roles{
		Index:   "",
		Admins:  []string{msg.Creator},
		Editors: []string{},
		Signers: []string{},
		Viewers: []string{},
	}
	document := docTypes.Document{
		Index:  "",
		State:  "Editing",
		Files:  msg.Files,
		Roles:  &roles,
		Signed: []string{},
	}

	_ = ctx

	return &types.MsgCreateDocumentResponse{}, nil
}
