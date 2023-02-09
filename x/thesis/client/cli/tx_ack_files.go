package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
	"thesis/x/thesis/types"
)

var _ = strconv.Itoa(0)

func CmdAckFiles() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "ack-files [files] [doc]",
		Short: "Broadcast message ackFiles",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFiles := strings.Split(args[0], listSeparator)
			argDoc, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAckFiles(
				clientCtx.GetFromAddress().String(),
				argFiles,
				argDoc,
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
