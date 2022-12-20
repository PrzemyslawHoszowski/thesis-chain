package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "thesis/testutil/keeper"
	"thesis/testutil/nullify"
	"thesis/x/thesis/keeper"
	"thesis/x/thesis/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNAuthorizeAccount(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AuthorizeAccount {
	items := make([]types.AuthorizeAccount, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetAuthorizeAccount(ctx, items[i])
	}
	return items
}

func TestAuthorizeAccountGet(t *testing.T) {
	keeper, ctx := keepertest.ThesisKeeper(t)
	items := createNAuthorizeAccount(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAuthorizeAccount(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAuthorizeAccountRemove(t *testing.T) {
	keeper, ctx := keepertest.ThesisKeeper(t)
	items := createNAuthorizeAccount(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAuthorizeAccount(ctx,
			item.Index,
		)
		_, found := keeper.GetAuthorizeAccount(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestAuthorizeAccountGetAll(t *testing.T) {
	keeper, ctx := keepertest.ThesisKeeper(t)
	items := createNAuthorizeAccount(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAuthorizeAccount(ctx)),
	)
}
