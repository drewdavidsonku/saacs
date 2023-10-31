package contracts

import (
	"log/slog"

	"github.com/samber/oops"

	"github.com/nova38/thesis/lib/go/fabric/rbac"
	"github.com/nova38/thesis/lib/go/fabric/state"

	cc "github.com/nova38/thesis/lib/go/gen/chaincode/rbac/schema/v1"
	rbac_pb "github.com/nova38/thesis/lib/go/gen/rbac"
)

func (a AuthContractImpl) CollectionGetList(
	ctx *AuthTxCtx,
) (res *cc.CollectionGetListResponse, err error) {
	defer func() { ctx.HandleFnError(&err, recover()) }()

	// Get the collections
	collectionList, err := state.GetFullList(ctx, &rbac_pb.Collection{})
	if err != nil {
		return nil, oops.
			In(ctx.GetFnName()).
			Code(rbac_pb.Error_ERROR_UNSPECIFIED.String()).
			Wrap(err)
	}

	return &cc.CollectionGetListResponse{
		Collections: collectionList,
	}, nil
}

func (a AuthContractImpl) CollectionGet(
	ctx *AuthTxCtx,
	req *cc.CollectionGetRequest,
) (res *cc.CollectionGetResponse, err error) {
	defer func() {
		if err != nil {
			ctx.Logger.Error(err.Error(), slog.Any("error", err))
		}
	}()

	// Validate the request
	err = ctx.Validate(req)
	if err != nil {
		return nil, oops.
			In(ctx.GetFnName()).
			Code(rbac_pb.Error_ERROR_REQUEST_INVALID.String()).
			Wrap(err)
	}

	// Get the collection
	col, err := ctx.SetCollection(req.GetCollectionId())
	if err != nil {
		return nil, oops.
			In(ctx.GetFnName()).
			Code(rbac_pb.Error_ERROR_COLLECTION_INVALID.String()).
			Wrap(err)
	}

	if err = ctx.IsAuthorized(); err != nil {
		return nil, oops.
			In(ctx.GetFnName()).
			Code(rbac_pb.Error_ERROR_USER_PERMISSION_DENIED.String()).
			Wrap(err)
	}

	return &cc.CollectionGetResponse{
		Collection: col,
	}, nil
}

func (a AuthContractImpl) CollectionGetHistory(
	ctx *AuthTxCtx,
	req *cc.CollectionGetHistoryRequest,
) (res *cc.CollectionGetHistoryResponse, err error) {
	// TODO implement CollectionGetHistory
	defer func() { ctx.HandleFnError(&err, recover()) }()

	if err = ctx.Validate(req); err != nil {
		return nil, oops.
			In(ctx.GetFnName()).
			Code(rbac_pb.Error_ERROR_REQUEST_INVALID.String()).
			Wrap(err)
	}

	panic("implement me")
}

func (a AuthContractImpl) CollectionCreate(
	ctx *AuthTxCtx,
	req *cc.CollectionCreateRequest,
) (res *cc.CollectionCreateResponse, err error) {
	// TODO implement CollectionCreate
	defer func() { ctx.HandleFnError(&err, recover()) }()

	{ // Validate

		// Check req
		if err = ctx.Validate(req); err != nil {
			return nil, oops.Wrap(err)
		}

		// Extract AuthTransactionItems
		if err = ctx.ExtractAuthTransactionItems(req); err != nil {
			return nil, oops.Wrap(err)
		}

		// Check if the paths are valid for the type
		if err = rbac.ValidateCollection(req.Collection); err != nil {
			return nil, oops.In(ctx.GetFnName()).With("req", req).Wrap(err)
		}

	}

	{ // Authorize
		// all users can create collections
	}

	{ // Process

		// Create the collection
		res = &cc.CollectionCreateResponse{Collection: req.Collection}

		return res, state.Insert(ctx, req.Collection)
	}
}

func (a AuthContractImpl) CollectionUpdateRoles(
	ctx *AuthTxCtx,
	req *cc.CollectionUpdateRolesRequest,
) (res *cc.CollectionUpdateRolesResponse, err error) {
	// TODO implement CollectionUpdateRoles
	defer func() { ctx.HandleFnError(&err, recover()) }()

	{ // Validate
		// Validate the request
		if err = ctx.Validate(req); err != nil {
			return nil, oops.Wrap(err)
		}

		// Extract AuthTransactionItems
		if err = ctx.ExtractAuthTransactionItems(req); err != nil {
			return nil, oops.Wrap(err)
		}
		// Check if the paths are valid for the type

		// todo other validations
	}

	{ // Authorize
		if err = ctx.IsAuthorized(); err != nil {
			return nil, oops.Wrap(err)
		}
	}

	{ // Process
		col, err := ctx.GetCollection()
		if err != nil {
			return nil, oops.Wrap(err)
		}
		if col == nil {
			return nil, oops.Errorf("collection is nil")
		}

		// todo: Change other parts???
		col.Roles = req.Roles

		// Make sure the collection is valid
		if err = rbac.ValidateCollection(col); err != nil {
			return nil, oops.In(ctx.GetFnName()).With("req", req).Wrap(err)
		}

		res = &cc.CollectionUpdateRolesResponse{Collection: col}

		return res, state.Update(ctx, col)
	}
}

func (a AuthContractImpl) CollectionUpdatePermission(
	ctx *AuthTxCtx,
	req *cc.CollectionUpdatePermissionRequest,
) (res *cc.CollectionUpdatePermissionResponse, err error) {
	// TODO implement CollectionUpdatePermission
	defer func() { ctx.HandleFnError(&err, recover()) }()

	// Validate the request
	if err = ctx.Validate(req); err != nil {
		return nil, oops.Wrap(err)
	}

	// Extract AuthTransactionItems
	if err = ctx.ExtractAuthTransactionItems(req); err != nil {
		return nil, oops.Wrap(err)
	}
	panic("implement me")
}