package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

// difference returns the elements in `a` that aren't in `b`.
// Source: https://stackoverflow.com/questions/19374219/how-to-find-the-difference-between-two-slices-of-strings
func difference(a, b []string) []string {
	mb := make(map[string]struct{}, len(b))
	for _, x := range b {
		mb[x] = struct{}{}
	}
	var diff []string
	for _, x := range a {
		if _, found := mb[x]; !found {
			diff = append(diff, x)
		}
	}
	return diff
}

func (k msgServer) RemoveUsers(goCtx context.Context, msg *types.MsgRemoveUsers) (*types.MsgRemoveUsersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	document, found := k.GetDocument(ctx, msg.DocumentId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Document not found")
	}
	isValid, err := verifyUsersChange(document, msg.Role, msg.Creator, msg.Addresses)
	if !isValid {
		return nil, err
	}

	switch msg.Role {
	case "Admins":
		document.Admins = difference(document.Admins, msg.Addresses)
	case "Editors":
		document.Editors = difference(document.Editors, msg.Addresses)
	case "Signers":
		document.Signers = difference(document.Signers, msg.Addresses)
	case "Viewers":
		document.Viewers = difference(document.Viewers, msg.Addresses)
	}

	k.SetDocument(ctx, document)
	index, _ := strconv.ParseUint(document.Index, 10, 64)
	return &types.MsgRemoveUsersResponse{Id: index}, nil
}
