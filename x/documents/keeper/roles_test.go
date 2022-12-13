package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "thesis/testutil/keeper"
	"thesis/testutil/nullify"
	"thesis/x/documents/keeper"
	"thesis/x/documents/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNRoles(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Roles {
	items := make([]types.Roles, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetRoles(ctx, items[i])
	}
	return items
}

func TestRolesGet(t *testing.T) {
	keeper, ctx := keepertest.DocumentsKeeper(t)
	items := createNRoles(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetRoles(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestRolesRemove(t *testing.T) {
	keeper, ctx := keepertest.DocumentsKeeper(t)
	items := createNRoles(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRoles(ctx,
			item.Index,
		)
		_, found := keeper.GetRoles(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestRolesGetAll(t *testing.T) {
	keeper, ctx := keepertest.DocumentsKeeper(t)
	items := createNRoles(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllRoles(ctx)),
	)
}
