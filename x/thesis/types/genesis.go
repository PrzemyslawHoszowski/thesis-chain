package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		DocumentList: []Document{},
		SystemInfo: &SystemInfo{
			NextDocumentId: uint64(DefaultIndex),
		},
		AuthorizeAccountList: []AuthorizeAccount{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in document
	documentIndexMap := make(map[string]struct{})

	for _, elem := range gs.DocumentList {
		index := string(DocumentKey(elem.Index))
		if _, ok := documentIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for document")
		}
		documentIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in authorizeAccount
	authorizeAccountIndexMap := make(map[string]struct{})

	for _, elem := range gs.AuthorizeAccountList {
		index := string(AuthorizeAccountKey(elem.Index))
		if _, ok := authorizeAccountIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for authorizeAccount")
		}
		authorizeAccountIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
