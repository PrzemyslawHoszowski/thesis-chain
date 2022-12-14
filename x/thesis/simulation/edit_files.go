package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"thesis/x/thesis/keeper"
	"thesis/x/thesis/types"
)

func SimulateMsgEditFiles(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgEditFiles{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the EditFiles simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "EditFiles simulation not implemented"), nil, nil
	}
}
