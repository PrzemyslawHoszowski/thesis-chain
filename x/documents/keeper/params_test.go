package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "thesis/testutil/keeper"
	"thesis/x/documents/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DocumentsKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
