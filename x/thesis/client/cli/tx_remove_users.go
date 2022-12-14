package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
	"thesis/x/thesis/types"
)

var _ = strconv.Itoa(0)

func CmdRemoveUsers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "remove-users [document-id] [role] [addresses]",
		Short: "Broadcast message removeUsers",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDocumentId := args[0]
			argRole := args[1]
			argAddresses := strings.Split(args[2], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRemoveUsers(
				clientCtx.GetFromAddress().String(),
				argDocumentId,
				argRole,
				argAddresses,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
