package keeper

import (
	"thesis/x/thesis/types"
)

var _ types.QueryServer = Keeper{}
