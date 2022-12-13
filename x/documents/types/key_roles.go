package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// RolesKeyPrefix is the prefix to retrieve all Roles
	RolesKeyPrefix = "Roles/value/"
)

// RolesKey returns the store key to retrieve a Roles from the index fields
func RolesKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
