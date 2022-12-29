package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"thesis/x/thesis/types"
)

var _ = strconv.Itoa(0)

func CmdRejectDocument() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "reject-document [document-id] [reason]",
		Short: "Broadcast message rejectDocument",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDocumentId := args[0]
			argReason := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRejectDocument(
				clientCtx.GetFromAddress().String(),
				argDocumentId,
				argReason,
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
