package state

import (
	"log/slog"

	"github.com/hyperledger/fabric-chaincode-go/shim"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
	authpb "github.com/nova38/thesis/lib/go/gen/auth/v1"

	"google.golang.org/protobuf/proto"
)

type (
	ExtractorFunc func(ctx TxCtxInterface, msg interface{}) (interface{}, error)
	AuthFunc      func(ctx TxCtxInterface, ops []*authpb.Operation) (auth bool, err error)

	GenericTxCtxInterface interface {
		TxCtxInterface
	}

	TxCtxInterface interface {
		contractapi.TransactionContextInterface
		// ════════════════════════════════════════════════════════
		// Generic injectors
		// ════════════════════════════════════════════════════════

		// AddExtractorFunc - Adds an extractor function to the transaction
		// AddExtractorFunc(name string, fn ExtractorFunc)

		// HandelBefore - Handles the before function for the transaction
		HandelBefore() (err error)
		HandleFnError(err *error, r any)
		CloseQueryIterator(resultIterator shim.CommonIteratorInterface)
		// ════════════════════════════════════════════════════════

		GetLogger() *slog.Logger

		GetPageSize() int32
		SetPageSize(pageSize int32)
		// ─────────────────────────────────────────────────────────────────────

		// ════════════════════════════════════════════════════════
		// Validate functions
		// ════════════════════════════════════════════════════════

		// Validate - Validates the message
		Validate(msg proto.Message) error
		// ─────────────────────────────────────────────────────────────────────

		// ════════════════════════════════════════════════════════
		// Info functions
		// ════════════════════════════════════════════════════════

		// GetFnName - Gets the function name for the transaction
		GetFnName() (name string)

		// ─────────────────────────────────────────────────────────────────────

		// ════════════════════════════════════════════════════════
		// Lifecycle functions
		// ════════════════════════════════════════════════════════

		// MakeLastModified - Makes the last modified activity
		MakeLastModified() (mod *authpb.StateActivity, err error)

		// ─────────────────────────────────────────────────────────────────────

		// ════════════════════════════════════════════════════════
		// Auth Functions
		// ════════════════════════════════════════════════════════

		// SetAuthenticator - Sets the authenticator for the transaction
		SetAuthenticator(AuthFunc)
		GetAuthenticator() AuthFunc

		// ════════════════════════════════════════════════════════
		//  Operations Functions
		// ════════════════════════════════════════════════════════
		//
		//SetOperation(operation *authpb.Operation)
		//GetOperations() (ops *authpb.Operation, err error)
		//SetOperationsPaths(paths *fieldmaskpb.FieldMask) (err error)

		// ─────────────────────────────────────────────────────────────────────

		// ════════════════════════════════════════════════════════
		//  User Functions
		// ════════════════════════════════════════════════════════

		// GetUserId Uses the ctx stub to get the user id from transaction
		// context
		GetUserId() (user *authpb.User, err error)

		// GetUser Uses the ctx stub to get the user from the state
		//
		// # Requirements:
		//   - User to be registered
		// GetUser() (user *authpb.User, err error)

		// ─────────────────────────────────────────────────────────────────────

		//GetCollection - Gets the collection value from the state
		//
		//# Requirements:
		// - collection to be set
		//GetCollection() (col *authpb.Collection, err error)
		//
		//// SetCollection - Sets the collection value in the state
		//SetCollection(collectionId string) (col *authpb.Collection, err error)
		// ─────────────────────────────────────────────────────────────────────

		// ════════════════════════════════════════════════════════
		//  ACL Functions
		// ════════════════════════════════════════════════════════

		// GetViewMask() (mask *fieldmaskpb.FieldMask)

		// Authorize - Checks if the user is authorized to perform the action on
		// the collection
		//
		// # Requirements:
		//  - collection to be set
		//  - action to be set
		//  - domain to be set
		Authorize(ops []*authpb.Operation) (bool, error)

		// GetMask - Request the mask for the operation from the auth service
	}
)
