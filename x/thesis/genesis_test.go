package thesis_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "thesis/testutil/keeper"
	"thesis/testutil/nullify"
	"thesis/x/thesis"
	"thesis/x/thesis/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ThesisKeeper(t)
	thesis.InitGenesis(ctx, *k, genesisState)
	got := thesis.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
