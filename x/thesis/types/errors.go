package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/thesis module sentinel errors
var (
	ErrInvalidRole    = sdkerrors.Register(ModuleName, 1200, "Invalid role")
	ErrAlreadySigned  = sdkerrors.Register(ModuleName, 1300, "Already signed")
	ErrInvalidState   = sdkerrors.Register(ModuleName, 1400, "Invalid state")
	ErrInvalidAddress = sdkerrors.Register(ModuleName, 1500, "Invalid user address")
)
