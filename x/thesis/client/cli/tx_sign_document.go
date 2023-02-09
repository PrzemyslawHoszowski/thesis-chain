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

func CmdSignDocument() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "sign-document [document-id] [files]",
		Short: "Broadcast message signDocument",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDocumentId := args[0]
			argHeight, _ := strconv.ParseUint(args[1], 0, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSignDocument(
				clientCtx.GetFromAddress().String(),
				argDocumentId,
				argHeight,
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
