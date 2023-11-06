// Code generated by proto-gen-go-hlf. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: chaincode/rbac/schema/v1/auth_service.proto

package schemav1

import (
	fmt "fmt"
	rbac "github.com/nova38/thesis/lib/go/fabric/rbac"
	rbac1 "github.com/nova38/thesis/lib/go/gen/rbac"
)

// Service AuthService
type AuthServiceInterface[T rbac.GenericAuthTxCtxInterface] interface {
	// UserGetCurrent: Returns the current user.
	//
	// Returns the current user.
	// # Requires:
	//   - User submitting the transaction is a registered user.
	//
	// # Operation:
	//   - Domain: DOMAIN_USER
	//   - Action: ACTION_VIEW
	//
	// req is empty
	UserGetCurrent(ctx T) (res *UserGetCurrentResponse, err error)

	// Returns the current user id.
	//
	// # Requires:
	//   - User submitting the transaction is a registered user.
	//
	// # Operation:
	//   - Domain: DOMAIN_USER
	//   - Action: ACTION_VIEW
	//
	// req is empty
	UserGetCurrentId(ctx T) (res *UserGetCurrentIdResponse, err error)

	// UserGetList: Returns the list of users.
	//
	// # Requires:
	//   - Non-register users can call this method.
	//
	// # Operation:
	//   - Domain: DOMAIN_USER
	//   - Action: ACTION_VIEW
	//
	// req is empty
	UserGetList(ctx T) (res *UserGetListResponse, err error)

	// UserGet: Returns the user.
	//
	// # Requires:
	//   - Non-register users can call this method.
	//
	// # Operation:
	//   - Domain: DOMAIN_USER
	//   - Action: ACTION_VIEW
	UserGet(ctx T, req *UserGetRequest) (res *UserGetResponse, err error)

	// UserGetHistory: Returns the user history.
	//
	// # Requires:
	//   - Non-register users can call this method.
	//
	// # Operation:
	//   - Domain: DOMAIN_USER
	//   - Action: ACTION_VIEW_HISTORY
	UserGetHistory(ctx T, req *UserGetHistoryRequest) (res *UserGetHistoryResponse, err error)

	// UserRegister: Registers the user.
	//
	// # Requires:
	//   - The certificate for the user submitting this request must not be already registered as a user.
	//
	// # Operation:
	//   - Domain: DOMAIN_USER
	//   - Action: ACTION_CREATE
	UserRegister(ctx T, req *UserRegisterRequest) (res *UserRegisterResponse, err error)

	// UserUpdateMembership: Updates the user's membership.
	//
	// # Requires:
	//   - User submitting the transaction is a registered user.
	//   - The specified user id is a registered user.
	//   - The specified collection id is a registered collection.
	//   - The user submitting the transaction is a member of the specified collection.
	//   - The user submitting the transaction the a role who has permission
	//     to update the membership of the specified collection.
	//
	// # Operation:
	//   - Domain: DOMAIN_COLLECTION_MEMBERSHIP
	//   - Action: ACTION_EDIT
	UserUpdateMembership(ctx T, req *UserUpdateMembershipRequest) (res *UserUpdateMembershipResponse, err error)

	// CollectionGetList: Returns the list of collections.
	//
	// # Requires:
	//   - Non-register users can call this method.
	//
	// # Operation:
	//   - Domain: DOMAIN_COLLECTION
	//   - Action: ACTION_VIEW
	//
	// req is empty
	CollectionGetList(ctx T) (res *CollectionGetListResponse, err error)

	// CollectionGet: Returns the collection.
	//
	// # Requires:
	//   - Non-register users can call this method.
	//
	// # Operation:
	//   - Domain: DOMAIN_COLLECTION
	//   - Action: ACTION_VIEW
	CollectionGet(ctx T, req *CollectionGetRequest) (res *CollectionGetResponse, err error)

	// CollectionGetHistory: Returns the collection history.
	//
	// # Requires:
	//   - Non-register users can call this method.
	//
	// # Operation:
	//   - Domain: DOMAIN_COLLECTION
	//   - Action: ACTION_VIEW_HISTORY
	CollectionGetHistory(ctx T, req *CollectionGetHistoryRequest) (res *CollectionGetHistoryResponse, err error)

	// CollectionCreate: Creates the collection.
	//
	// # Requires:
	//   - User submitting the transaction is a registered user.
	//
	// # Operation:
	//   - Domain: DOMAIN_COLLECTION
	//   - Action: ACTION_CREATE
	CollectionCreate(ctx T, req *CollectionCreateRequest) (res *CollectionCreateResponse, err error)

	// CollectionUpdateRoles
	//
	// # Operation:
	//   - Domain: DOMAIN_COLLECTION_ROLES
	//   - Action: ACTION_EDIT
	CollectionUpdateRoles(ctx T, req *CollectionUpdateRolesRequest) (res *CollectionUpdateRolesResponse, err error)

	// CollectionUpdatePermission
	//
	// # Operation:
	//   - Domain: DOMAIN_COLLECTION_PERMISSION
	//   - Action: ACTION_EDIT
	CollectionUpdatePermission(ctx T, req *CollectionUpdatePermissionRequest) (res *CollectionUpdatePermissionResponse, err error)
}

type AuthServiceBase struct {
}

func (s *AuthServiceBase) GetEvaluateTransactions() []string {
	return []string{
		"UserGetCurrent",
		"UserGetCurrentId",
		"UserGetList",
		"UserGet",
		"UserGetHistory",
		"CollectionGetList",
		"CollectionGet",
		"CollectionGetHistory",
	}
}

func AuthServiceGetTxOperation(txName string) (op *rbac1.ACL_Operation, err error) {
	switch txName {
	case "UserGetCurrent":
		// domain:DOMAIN_USER  action:ACTION_VIEW
		return &rbac1.ACL_Operation{
			Domain: 5,
			Action: 1,
		}, nil
	case "UserGetCurrentId":
		// domain:DOMAIN_USER  action:ACTION_VIEW
		return &rbac1.ACL_Operation{
			Domain: 5,
			Action: 1,
		}, nil
	case "UserGetList":
		// domain:DOMAIN_USER  action:ACTION_VIEW
		return &rbac1.ACL_Operation{
			Domain: 5,
			Action: 1,
		}, nil
	case "UserGet":
		// domain:DOMAIN_USER  action:ACTION_VIEW
		return &rbac1.ACL_Operation{
			Domain: 5,
			Action: 1,
		}, nil
	case "UserGetHistory":
		// domain:DOMAIN_USER  action:ACTION_VIEW_HISTORY
		return &rbac1.ACL_Operation{
			Domain: 5,
			Action: 9,
		}, nil
	case "UserRegister":
		// domain:DOMAIN_USER  action:ACTION_CREATE
		return &rbac1.ACL_Operation{
			Domain: 5,
			Action: 2,
		}, nil
	case "UserUpdateMembership":
		// domain:DOMAIN_COLLECTION_MEMBERSHIP  action:ACTION_EDIT
		return &rbac1.ACL_Operation{
			Domain: 2,
			Action: 4,
		}, nil
	case "CollectionGetList":
		// domain:DOMAIN_COLLECTION  action:ACTION_VIEW
		return &rbac1.ACL_Operation{
			Domain: 1,
			Action: 1,
		}, nil
	case "CollectionGet":
		// domain:DOMAIN_COLLECTION  action:ACTION_VIEW
		return &rbac1.ACL_Operation{
			Domain: 1,
			Action: 1,
		}, nil
	case "CollectionGetHistory":
		// domain:DOMAIN_COLLECTION  action:ACTION_VIEW_HISTORY
		return &rbac1.ACL_Operation{
			Domain: 1,
			Action: 9,
		}, nil
	case "CollectionCreate":
		// domain:DOMAIN_COLLECTION  action:ACTION_CREATE
		return &rbac1.ACL_Operation{
			Domain: 1,
			Action: 2,
		}, nil
	case "CollectionUpdateRoles":
		// domain:DOMAIN_COLLECTION_ROLES  action:ACTION_EDIT
		return &rbac1.ACL_Operation{
			Domain: 4,
			Action: 4,
		}, nil
	case "CollectionUpdatePermission":
		// domain:DOMAIN_COLLECTION_PERMISSION  action:ACTION_EDIT
		return &rbac1.ACL_Operation{
			Domain: 3,
			Action: 4,
		}, nil
	default:
		return nil, fmt.Errorf("No operation defined for " + txName)
	}
	return nil, nil
}

func (s *AuthServiceBase) GetIgnoredFunctions() []string {
	return []string{"GetTxOperation"}
}
