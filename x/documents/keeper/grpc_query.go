package keeper

import (
	"thesis/x/documents/types"
)

var _ types.QueryServer = Keeper{}
