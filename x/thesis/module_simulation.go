package thesis

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"thesis/testutil/sample"
	thesissimulation "thesis/x/thesis/simulation"
	"thesis/x/thesis/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = thesissimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgAddCertificate = "op_weight_msg_add_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAddCertificate int = 100

	opWeightMsgCreateDocument = "op_weight_msg_create_document"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDocument int = 100

	opWeightMsgCreateRoles = "op_weight_msg_roles"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRoles int = 100

	opWeightMsgUpdateRoles = "op_weight_msg_roles"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateRoles int = 100

	opWeightMsgDeleteRoles = "op_weight_msg_roles"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteRoles int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	thesisGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		RolesList: []types.Roles{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&thesisGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgAddCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAddCertificate, &weightMsgAddCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgAddCertificate = defaultWeightMsgAddCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAddCertificate,
		thesissimulation.SimulateMsgAddCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDocument int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDocument, &weightMsgCreateDocument, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDocument = defaultWeightMsgCreateDocument
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDocument,
		thesissimulation.SimulateMsgCreateDocument(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateRoles int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateRoles, &weightMsgCreateRoles, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRoles = defaultWeightMsgCreateRoles
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRoles,
		thesissimulation.SimulateMsgCreateRoles(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateRoles int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateRoles, &weightMsgUpdateRoles, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRoles = defaultWeightMsgUpdateRoles
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRoles,
		thesissimulation.SimulateMsgUpdateRoles(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteRoles int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteRoles, &weightMsgDeleteRoles, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRoles = defaultWeightMsgDeleteRoles
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRoles,
		thesissimulation.SimulateMsgDeleteRoles(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
