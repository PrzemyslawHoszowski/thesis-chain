package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AuthorizeAccountKeyPrefix is the prefix to retrieve all AuthorizeAccount
	AuthorizeAccountKeyPrefix = "AuthorizeAccount/value/"
)

// AuthorizeAccountKey returns the store key to retrieve a AuthorizeAccount from the index fields
func AuthorizeAccountKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
