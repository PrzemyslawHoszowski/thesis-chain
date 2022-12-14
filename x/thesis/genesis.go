package thesis

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/keeper"
	"thesis/x/thesis/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the document
	for _, elem := range genState.DocumentList {
		k.SetDocument(ctx, elem)
	}
	// Set if defined
	if genState.SystemInfo != nil {
		k.SetSystemInfo(ctx, *genState.SystemInfo)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.DocumentList = k.GetAllDocument(ctx)
	// Get all systemInfo
	systemInfo, found := k.GetSystemInfo(ctx)
	if found {
		genesis.SystemInfo = &systemInfo
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
