package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/thesis module sentinel errors
var (
	ErrCanNotModifyRole = sdkerrors.Register(ModuleName, 1100, "Can't modify role during current state")
	ErrInvalidRole      = sdkerrors.Register(ModuleName, 1200, "Role doesn't exists")
)
