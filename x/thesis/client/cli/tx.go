package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"thesis/x/thesis/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdAddCertificate())
	cmd.AddCommand(CmdCreateDocument())
	cmd.AddCommand(CmdAddUsers())
	cmd.AddCommand(CmdRemoveUsers())
	cmd.AddCommand(CmdEditFiles())
	cmd.AddCommand(CmdSignDocument())
	cmd.AddCommand(CmdRejectSignature())
	cmd.AddCommand(CmdAuthorize())
	cmd.AddCommand(CmdRejectDocument())
	// this line is used by starport scaffolding # 1

	return cmd
}
