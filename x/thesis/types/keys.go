package types

const (
	// ModuleName defines the module name
	ModuleName = "thesis"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_thesis"

	CertificateKey      = "Certificate/value/"
	CertificateCountKey = "Certificate/count/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	SystemInfoKey = "SystemInfo-value-"
)

const (
	DocumentCreatedEvent = "document-created"
	DocumentSigned       = "document-signed"
	DocumentUsersAdded   = "document-users-added"
	DocumentUsersRemoved = "document-users-removed"
	DocumentUsers        = "document-users"
	DocumentRole         = "document-role"
	DocumentId           = "document-id"
	DocumentFiles        = "document-files"
)

const (
	EntityAuthorized = "entity-authorized"
	AccountId        = "account-id"
	Caller           = "caller"
	AuthorizationId  = "authorization-id"
)
