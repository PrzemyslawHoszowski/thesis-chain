package keeper

import (
	"context"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	slices2 "github.com/influxdata/influxdb/pkg/slices"
	"k8s.io/utils/strings/slices"
	"strconv"
	"strings"
	"thesis/x/thesis/types"
)

func canModifyRole(state string, role string) bool {
	if role == "Signers" {
		return state == "Editing"
	}
	return true
}

func verifyUsersChange(document types.Document, role string, creator string, addresses []string) (bool, error) {
	if !(slices.Contains(document.Admins, creator)) {
		return false, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Tx signer is not authorized to this action")
	}
	if !(slices.Contains(types.ValidRoles, role)) {
		return false, sdkerrors.Wrap(types.ErrInvalidRole, "Role doesn't exist")
	}
	if !canModifyRole(document.State, role) {
		err := fmt.Sprintf("Cannot modify role: %s in state: %s:", role, document.State)
		return false, sdkerrors.Wrap(types.ErrInvalidState, err)
	}
	// check if passed addresses are valid
	for _, s := range addresses {
		_, error := sdk.AccAddressFromBech32(s)
		if error != nil {

			return false, sdkerrors.Wrap(types.ErrInvalidRole, "Role can only contain addresses")
		}
	}
	return true, nil
}

func (k msgServer) AddUsers(goCtx context.Context, msg *types.MsgAddUsers) (*types.MsgAddUsersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	document, found := k.GetDocument(ctx, msg.DocumentId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Document not found")
	}
	isValid, err := verifyUsersChange(document, msg.Role, msg.Creator, msg.Addresses)
	if !isValid {
		return nil, err
	}
	var diff []string

	switch msg.Role {
	case "Admins":
		diff = difference(msg.Addresses, document.Admins)
		document.Admins = slices2.Union(document.Admins, msg.Addresses, false)
	case "Editors":
		diff = difference(msg.Addresses, document.Editors)
		document.Editors = slices2.Union(document.Editors, msg.Addresses, false)
	case "Signers":
		diff = difference(msg.Addresses, document.Signers)
		document.Signers = slices2.Union(document.Signers, msg.Addresses, false)
	case "Viewers":
		diff = difference(msg.Addresses, document.Viewers)
		document.Viewers = slices2.Union(document.Viewers, msg.Addresses, false)
	}

	k.SetDocument(ctx, document)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.DocumentUsersAdded,
			sdk.NewAttribute(types.Caller, msg.Creator),
			sdk.NewAttribute(types.DocumentUsersAdded, strings.Join(diff, ",")),
			sdk.NewAttribute(types.DocumentRole, msg.Role),
			sdk.NewAttribute(types.DocumentId, msg.DocumentId),
		),
	)

	index, _ := strconv.ParseUint(document.Index, 10, 64)
	return &types.MsgAddUsersResponse{Id: index}, nil
}
