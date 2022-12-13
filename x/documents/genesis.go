package documents

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/documents/keeper"
	"thesis/x/documents/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the roles
	for _, elem := range genState.RolesList {
		k.SetRoles(ctx, elem)
	}
	// Set all the document
	for _, elem := range genState.DocumentList {
		k.SetDocument(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.RolesList = k.GetAllRoles(ctx)
	genesis.DocumentList = k.GetAllDocument(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
