package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
	"thesis/x/thesis/types"
)

func CmdCreateRoles() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-roles [index] [admins] [editors] [signers] [viewers]",
		Short: "Create a new Roles",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argAdmins := strings.Split(args[1], listSeparator)
			argEditors := strings.Split(args[2], listSeparator)
			argSigners := strings.Split(args[3], listSeparator)
			argViewers := strings.Split(args[4], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateRoles(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argAdmins,
				argEditors,
				argSigners,
				argViewers,
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

func CmdUpdateRoles() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-roles [index] [admins] [editors] [signers] [viewers]",
		Short: "Update a Roles",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argAdmins := strings.Split(args[1], listSeparator)
			argEditors := strings.Split(args[2], listSeparator)
			argSigners := strings.Split(args[3], listSeparator)
			argViewers := strings.Split(args[4], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateRoles(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argAdmins,
				argEditors,
				argSigners,
				argViewers,
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

func CmdDeleteRoles() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-roles [index]",
		Short: "Delete a Roles",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteRoles(
				clientCtx.GetFromAddress().String(),
				indexIndex,
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
