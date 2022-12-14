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

func CmdSignDocument() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "sign-document [document-id] [files]",
		Short: "Broadcast message signDocument",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDocumentId := args[0]
			argFiles := strings.Split(args[1], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSignDocument(
				clientCtx.GetFromAddress().String(),
				argDocumentId,
				argFiles,
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
