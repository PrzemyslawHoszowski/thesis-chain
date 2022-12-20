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

		DocumentList: []types.Document{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		SystemInfo: &types.SystemInfo{
			NextDocumentId: 14,
		},
		AuthorizeAccountList: []types.AuthorizeAccount{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ThesisKeeper(t)
	thesis.InitGenesis(ctx, *k, genesisState)
	got := thesis.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.DocumentList, got.DocumentList)
	require.Equal(t, genesisState.SystemInfo, got.SystemInfo)
	require.ElementsMatch(t, genesisState.AuthorizeAccountList, got.AuthorizeAccountList)
	// this line is used by starport scaffolding # genesis/test/assert
}
