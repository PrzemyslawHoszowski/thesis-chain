package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		RolesList:    []Roles{},
		DocumentList: []Document{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in roles
	rolesIndexMap := make(map[string]struct{})

	for _, elem := range gs.RolesList {
		index := string(RolesKey(elem.Index))
		if _, ok := rolesIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for roles")
		}
		rolesIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in document
	documentIndexMap := make(map[string]struct{})

	for _, elem := range gs.DocumentList {
		index := string(DocumentKey(elem.Index))
		if _, ok := documentIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for document")
		}
		documentIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
