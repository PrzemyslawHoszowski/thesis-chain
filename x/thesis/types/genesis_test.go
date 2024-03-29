package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"thesis/x/thesis/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				DocumentList: []types.Document{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				SystemInfo: &types.SystemInfo{
					NextDocumentId: 60,
				},
				AuthorizeAccountList: []types.AuthorizeAccount{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated document",
			genState: &types.GenesisState{
				DocumentList: []types.Document{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated authorizeAccount",
			genState: &types.GenesisState{
				AuthorizeAccountList: []types.AuthorizeAccount{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
