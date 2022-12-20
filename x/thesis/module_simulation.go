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

	opWeightMsgAddUsers = "op_weight_msg_add_users"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAddUsers int = 100

	opWeightMsgRemoveUsers = "op_weight_msg_remove_users"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRemoveUsers int = 100

	opWeightMsgEditFiles = "op_weight_msg_edit_files"
	// TODO: Determine the simulation weight value
	defaultWeightMsgEditFiles int = 100

	opWeightMsgSignDocument = "op_weight_msg_sign_document"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSignDocument int = 100

	opWeightMsgRejectSignature = "op_weight_msg_reject_signature"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRejectSignature int = 100

	opWeightMsgAuthorize = "op_weight_msg_authorize"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAuthorize int = 100

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

	var weightMsgAddUsers int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAddUsers, &weightMsgAddUsers, nil,
		func(_ *rand.Rand) {
			weightMsgAddUsers = defaultWeightMsgAddUsers
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAddUsers,
		thesissimulation.SimulateMsgAddUsers(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRemoveUsers int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRemoveUsers, &weightMsgRemoveUsers, nil,
		func(_ *rand.Rand) {
			weightMsgRemoveUsers = defaultWeightMsgRemoveUsers
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRemoveUsers,
		thesissimulation.SimulateMsgRemoveUsers(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgEditFiles int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgEditFiles, &weightMsgEditFiles, nil,
		func(_ *rand.Rand) {
			weightMsgEditFiles = defaultWeightMsgEditFiles
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgEditFiles,
		thesissimulation.SimulateMsgEditFiles(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSignDocument int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSignDocument, &weightMsgSignDocument, nil,
		func(_ *rand.Rand) {
			weightMsgSignDocument = defaultWeightMsgSignDocument
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSignDocument,
		thesissimulation.SimulateMsgSignDocument(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRejectSignature int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRejectSignature, &weightMsgRejectSignature, nil,
		func(_ *rand.Rand) {
			weightMsgRejectSignature = defaultWeightMsgRejectSignature
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRejectSignature,
		thesissimulation.SimulateMsgRejectSignature(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAuthorize int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAuthorize, &weightMsgAuthorize, nil,
		func(_ *rand.Rand) {
			weightMsgAuthorize = defaultWeightMsgAuthorize
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAuthorize,
		thesissimulation.SimulateMsgAuthorize(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
