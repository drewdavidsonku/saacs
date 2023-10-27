// Code generated by proto-gen-go-hlf. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: chaincode/ccbio/schema/v1/service.proto

package schemav1

import (
	fmt "fmt"
	rbac "github.com/nova38/thesis/lib/go/fabric/rbac"
	rbac1 "github.com/nova38/thesis/lib/go/gen/rbac"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// Service BiochainSpecimenService
type BiochainSpecimenServiceInterface interface {
	// GetSpecimen
	GetSpecimen(ctx rbac.AuthTxCtx, req *GetSpecimenRequest) (res *Specimen, err error)

	// GetSpecimenList
	GetSpecimenList(ctx rbac.AuthTxCtx, req *emptypb.Empty) (res *Specimen_List, err error)

	// GetSpecimenByCollection
	GetSpecimenByCollection(ctx rbac.AuthTxCtx, req *GetSpecimenByCollectionRequest) (res *Specimen_List, err error)

	// GetSpecimenHistory
	GetSpecimenHistory(ctx rbac.AuthTxCtx, req *GetSpecimenHistoryRequest) (res *Specimen_History, err error)

	// SpecimenCreate
	SpecimenCreate(ctx rbac.AuthTxCtx, req *SpecimenCreateRequest) (res *SpecimenCreateResponse, err error)

	// SpecimenUpdate
	SpecimenUpdate(ctx rbac.AuthTxCtx, req *SpecimenUpdateRequest) (res *Specimen, err error)

	// SpecimenHideTransaction
	SpecimenHideTransaction(ctx rbac.AuthTxCtx, req *SpecimenHideTxRequest) (res *Specimen, err error)

	// SpecimenUnHideTransaction
	SpecimenUnHideTransaction(ctx rbac.AuthTxCtx, req *SpecimenUnHideTxRequest) (res *Specimen, err error)

	// SpecimenDelete
	SpecimenDelete(ctx rbac.AuthTxCtx, req *SpecimenDeleteRequest) (res *emptypb.Empty, err error)

	// GetSuggestedUpdate
	GetSuggestedUpdate(ctx rbac.AuthTxCtx, req *GetSuggestedUpdateRequest) (res *SuggestedUpdate, err error)

	// GetSuggestedUpdateBySpecimen
	GetSuggestedUpdateBySpecimen(ctx rbac.AuthTxCtx, req *GetSuggestedUpdateBySpecimenRequest) (res *SuggestedStateList, err error)

	// GetSuggestedUpdateByCollection
	GetSuggestedUpdateByCollection(ctx rbac.AuthTxCtx, req *GetSuggestedUpdateByCollectionRequest) (res *SuggestedStateList, err error)

	// GetSuggestedUpdateList
	GetSuggestedUpdateList(ctx rbac.AuthTxCtx, req *emptypb.Empty) (res *Specimen, err error)

	// SuggestedUpdateCreate
	SuggestedUpdateCreate(ctx rbac.AuthTxCtx, req *SuggestedUpdateCreateRequest) (res *SuggestedUpdate, err error)

	// SpecimenUpdateApprove
	SpecimenUpdateApprove(ctx rbac.AuthTxCtx, req *SuggestedUpdateApproveRequest) (res *Specimen, err error)

	// SpecimenUpdateReject
	SpecimenUpdateReject(ctx rbac.AuthTxCtx, req *SuggestedUpdateRejectRequest) (res *SuggestedUpdate, err error)
}

type BiochainSpecimenServiceBase struct {
}

func (s *BiochainSpecimenServiceBase) GetEvaluateTransactions() []string {
	return []string{}
}

func BiochainSpecimenServiceGetTxOperation(txName string) (op *rbac1.ACL_Operation, err error) {
	switch txName {
	case "GetSpecimen":
	// <nil>
	case "GetSpecimenList":
	// <nil>
	case "GetSpecimenByCollection":
	// <nil>
	case "GetSpecimenHistory":
	// <nil>
	case "SpecimenCreate":
	// <nil>
	case "SpecimenUpdate":
	// <nil>
	case "SpecimenHideTransaction":
	// <nil>
	case "SpecimenUnHideTransaction":
	// <nil>
	case "SpecimenDelete":
	// <nil>
	case "GetSuggestedUpdate":
	// <nil>
	case "GetSuggestedUpdateBySpecimen":
	// <nil>
	case "GetSuggestedUpdateByCollection":
	// <nil>
	case "GetSuggestedUpdateList":
	// <nil>
	case "SuggestedUpdateCreate":
	// <nil>
	case "SpecimenUpdateApprove":
	// <nil>
	case "SpecimenUpdateReject":
	// <nil>
	default:
		return nil, fmt.Errorf("No operation defined for " + txName)
	}
	return nil, nil
}

func (s *BiochainSpecimenServiceBase) GetIgnoredFunctions() []string {
	return []string{"GetTxOperation"}
}

// Service BiochainAuthService
type BiochainAuthServiceInterface interface {
	// *
	// GetCurrentUser: Returns the current user.
	//
	// Returns the current user.
	// Requires:
	// - User submitting the transaction is a registered user.
	GetCurrentUser(ctx rbac.AuthTxCtx, req *emptypb.Empty) (res *User, err error)

	// *
	// Returns the current user id.
	// Requires:
	// - User submitting the transaction is a registered user.
	GetCurrentUserId(ctx rbac.AuthTxCtx, req *emptypb.Empty) (res *User_Id, err error)

	// *
	GetUserList(ctx rbac.AuthTxCtx, req *GetUserListRequest) (res *GetUserListResponse, err error)

	// GetUser
	GetUser(ctx rbac.AuthTxCtx, req *GetUserRequest) (res *User, err error)

	// UserRegister
	UserRegister(ctx rbac.AuthTxCtx, req *UserRegisterRequest) (res *User, err error)

	// UserUpdateMembership
	UserUpdateMembership(ctx rbac.AuthTxCtx, req *UpdateMembershipRequest) (res *User, err error)

	// AddTestUsers
	AddTestUsers(ctx rbac.AuthTxCtx, req *User_Id) (res *emptypb.Empty, err error)

	// // Collection functions
	GetCollectionList(ctx rbac.AuthTxCtx, req *emptypb.Empty) (res *CollectionList, err error)

	// GetCollection
	GetCollection(ctx rbac.AuthTxCtx, req *GetCollectionRequest) (res *Collection, err error)

	// rpc collectionGetUsers(CollectionId) returns (UserList);
	CollectionCreate(ctx rbac.AuthTxCtx, req *CollectionCreateRequest) (res *Collection, err error)

	// CollectionUpdate
	CollectionUpdate(ctx rbac.AuthTxCtx, req *CollectionUpdateRequest) (res *Collection, err error)
}

type BiochainAuthServiceBase struct {
}

func (s *BiochainAuthServiceBase) GetEvaluateTransactions() []string {
	return []string{}
}

func BiochainAuthServiceGetTxOperation(txName string) (op *rbac1.ACL_Operation, err error) {
	switch txName {
	case "GetCurrentUser":
	// <nil>
	case "GetCurrentUserId":
	// <nil>
	case "GetUserList":
	// <nil>
	case "GetUser":
	// <nil>
	case "UserRegister":
	// <nil>
	case "UserUpdateMembership":
	// <nil>
	case "AddTestUsers":
	// <nil>
	case "GetCollectionList":
	// <nil>
	case "GetCollection":
	// <nil>
	case "CollectionCreate":
	// <nil>
	case "CollectionUpdate":
	// <nil>
	default:
		return nil, fmt.Errorf("No operation defined for " + txName)
	}
	return nil, nil
}

func (s *BiochainAuthServiceBase) GetIgnoredFunctions() []string {
	return []string{"GetTxOperation"}
}
