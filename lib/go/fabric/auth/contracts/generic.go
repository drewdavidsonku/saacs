package contracts

import (
	"log/slog"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
	pkgErrors "github.com/pkg/errors"

	// "github.com/nova38/thesis/lib/go/fabric/auth/common"
	"github.com/nova38/thesis/lib/go/fabric/auth/common"
	"github.com/nova38/thesis/lib/go/fabric/auth/state"
	authpb "github.com/nova38/thesis/lib/go/gen/auth/v1"
	cc "github.com/nova38/thesis/lib/go/gen/chaincode/auth/common"
	"github.com/samber/oops"
	"google.golang.org/protobuf/proto"
)

type ItemContractImpl struct {
	contractapi.Contract
	cc.GenericServiceBase
}

// see if ItemContractImpl implements the interface GenericServiceInterface
var _ cc.GenericServiceInterface[common.TxCtxInterface] = (*ItemContractImpl)(nil)

// ════════════════════════════════════ Init ═══════════════════════════════════════

// ══════════════════════════════════ Helper ═════════════════════════════════════
// ────────────────────────────────── Query ──────────────────────────────────────

func (o ItemContractImpl) GetCurrentUser(ctx common.TxCtxInterface) (res *cc.GetCurrentUserResponse, err error) {
	// TODO implement me
	panic("implement me")
}

// ──────────────────────────────────── Invoke ─────────────────────────────────────

func (o ItemContractImpl) Bootstrap(ctx common.TxCtxInterface, req *cc.BootstrapRequest) (res *cc.BootstrapResponse, err error) {
	// TODO implement me
	panic("implement me")
}

func (o ItemContractImpl) AuthorizeOperation(ctx common.TxCtxInterface, req *cc.AuthorizeOperationRequest) (res *cc.AuthorizeOperationResponse, err error) {
	// TODO implement me
	panic("implement me")
}

func (o ItemContractImpl) CreateUser(ctx common.TxCtxInterface) (res *cc.CreateUserResponse, err error) {
	// TODO implement me
	panic("implement me")
}

func (o ItemContractImpl) CreateCollection(ctx common.TxCtxInterface, req *cc.CreateCollectionRequest) (res *cc.CreateCollectionResponse, err error) {
	// TODO implement me
	panic("implement me")
}

// ════════════════════════════════════ Item ═════════════════════════════════════
// ──────────────────────────────────── Query ──────────────────────────────────────

func (o ItemContractImpl) Get(
	ctx common.TxCtxInterface,
	req *cc.GetRequest,
) (res *cc.GetResponse, err error) {
	var (
		obj common.ItemInterface
		msg *authpb.Item
	)

	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	if obj, err = common.UnPackItem(req.GetItem()); err != nil {
		return nil, pkgErrors.Wrap(err, "UnPackItem")
	}

	if err = state.PrimaryGet(ctx, obj); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, err
	}

	if msg, err = common.PackItem(obj); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, err
	} else {
		return &cc.GetResponse{
			Item: msg,
		}, nil
	}
}

func (o ItemContractImpl) List(
	ctx common.TxCtxInterface,
	req *cc.ListRequest,
) (res *cc.ListResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	proto.Reset(obj)
	// reset the item to its default state, so that we can get the full list

	list, mk, err := state.PrimaryList(ctx, obj, req.GetBookmark())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	res = &cc.ListResponse{
		Bookmark: mk,
		Items:    []*authpb.Item{},
	}

	if res.Items, err = common.ListItemToProtos(list); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return res, err
}

func (o ItemContractImpl) ListByCollection(
	ctx common.TxCtxInterface,
	req *cc.ListByCollectionRequest,
) (res *cc.ListByCollectionResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	// proto.Reset(obj) // reset the item to its default state, so that we can get the full list

	list, mk, err := state.PrimaryList(ctx, obj, req.GetBookmark())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	res = &cc.ListByCollectionResponse{
		Bookmark: mk,
		Items:    []*authpb.Item{},
	}

	if res.Items, err = common.ListItemToProtos(list); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return res, err
}

func (o ItemContractImpl) ListByAttrs(
	ctx common.TxCtxInterface,
	req *cc.ListByAttrsRequest,
) (res *cc.ListByAttrsResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	list, mk, err := state.PrimaryList(ctx, obj, req.GetBookmark())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))

		return nil, oops.Wrap(err)
	}

	res = &cc.ListByAttrsResponse{
		Bookmark: mk,
		Items:    []*authpb.Item{},
	}

	if res.Items, err = common.ListItemToProtos(list); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return res, err
}

// ──────────────────────────────────── Invoke ─────────────────────────────────────

func (o ItemContractImpl) Create(
	ctx common.TxCtxInterface,
	req *cc.CreateRequest,
) (res *cc.CreateResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	// Get the item from the request
	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	// Check if the item is a valid item for the collection??

	if err = state.PrimaryCreate(ctx, obj); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return &cc.CreateResponse{
		Item: req.GetItem(),
	}, err
}

func (o ItemContractImpl) Update(
	ctx common.TxCtxInterface,
	req *cc.UpdateRequest,
) (res *cc.UpdateResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	// Get the item from the request
	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	updated, err := state.PrimaryUpdate(ctx, obj, req.GetUpdateMask())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	if item, err := common.PackItem(updated); err != nil {
		return nil, oops.Wrap(err)
	} else {
		res = &cc.UpdateResponse{
			Item: item,
		}
	}

	return res, err
}

func (o ItemContractImpl) Delete(
	ctx common.TxCtxInterface,
	req *cc.DeleteRequest,
) (res *cc.DeleteResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	// Get the item from the request
	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	if err = state.PrimaryDelete(ctx, obj); err != nil {
		return nil, oops.Wrap(err)
	}

	item, err := common.PackItem(obj)
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return &cc.DeleteResponse{
		Item: item,
	}, err
}

// ════════════════════════════════════ History ════════════════════════════════════
// ──────────────────────────────────── Query ──────────────────────────────────────

func (o ItemContractImpl) History(
	ctx common.TxCtxInterface,
	req *cc.HistoryRequest,
) (res *cc.HistoryResponse, err error) {
	var (
		obj common.ItemInterface
		h   *authpb.History
	)

	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	if obj, err = common.UnPackItem(req.GetItem()); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	if h, err = state.History(ctx, obj); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return &cc.HistoryResponse{
		History: h,
	}, nil
}

func (o ItemContractImpl) HiddenTx(
	ctx common.TxCtxInterface,
	req *cc.HiddenTxRequest,
) (res *cc.HiddenTxResponse, err error) {
	var (
		obj  common.ItemInterface
		hTxs *authpb.HiddenTxList
	)

	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	if obj, err = common.UnPackItem(req.GetItem()); err != nil {
		return nil, oops.Wrap(err)
	}

	if hTxs, err = state.HiddenTx(ctx, obj); err != nil {
		return nil, oops.Wrap(err)
	}

	return &cc.HiddenTxResponse{
		CollectionId: obj.ItemKey().GetCollectionId(),
		HiddenTxs:    hTxs.GetTxs(),
	}, nil
}

// ──────────────────────────────────── Invoke ─────────────────────────────────────

func (o ItemContractImpl) HideTx(
	ctx common.TxCtxInterface,
	req *cc.HideTxRequest,
) (res *cc.HideTxResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	// Get the item from the request
	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	list, err := state.HideTransaction(ctx, obj, req.GetHiddenTx())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return &cc.HideTxResponse{
		Item:      req.GetItem(),
		HiddenTxs: list,
	}, err
}

func (o ItemContractImpl) UnHideTx(
	ctx common.TxCtxInterface,
	req *cc.UnHideTxRequest,
) (res *cc.UnHideTxResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	// Get the item from the request
	obj, err := common.UnPackItem(req.GetItem())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	list, err := state.UnHideTransaction(ctx, obj, req.GetTxId())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	return &cc.UnHideTxResponse{
		Item:      req.GetItem(),
		HiddenTxs: list,
	}, err
}

// ════════════════════════════════════ References ═════════════════════════════════
// ──────────────────────────────────── Query ──────────────────────────────────────

// Reference returns the reference if it exists
func (o ItemContractImpl) Reference(
	ctx common.TxCtxInterface,
	req *cc.ReferenceRequest,
) (res *cc.ReferenceResponse, err error) {
	// todo: Reference

	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	if v, err := state.GetReference(ctx, req.GetReference()); err != nil {
		return nil, oops.Wrap(err)
	} else if v == nil && err == nil {
		return &cc.ReferenceResponse{
			Exists: false,
		}, nil
	}

	return &cc.ReferenceResponse{
		Exists: true,
	}, nil
}

// ReferenceByPartialKey
func (o ItemContractImpl) ReferenceByPartialKey(
	ctx common.TxCtxInterface,
	req *cc.ReferenceByPartialKeyRequest,
) (res *cc.ReferenceByPartialKeyResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	list, mk, err := state.PartialReferenceKeysList(
		ctx,
		req.GetReference(),
		int(ctx.GetPageSize()),
		req.GetBookmark(),
	)
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	res = &cc.ReferenceByPartialKeyResponse{
		Bookmark:   mk,
		References: list,
	}
	return res, nil
}

// // todo: ReferenceListByType
// func (o ItemContractImpl) ReferenceByType(
// 	ctx state.TxCtxInterface,
// 	req *cc.ReferenceListByTypeRequest,
// ) (res *cc.ReferenceListByTypeResponse, err error) {
// 	// Validate the request
// 	if err = ctx.Validate(req); err != nil {
// 		return nil, oops.Wrap(err)
// 	}
// 	list, mk, err := state.ReferenceByType(ctx, req.GetReferenceType(), req.GetBookmark())
// 	if err != nil {
// 		return nil, oops.Wrap(err)
// 	}

// 	res = &cc.ReferenceListByTypeResponse{
// 		Bookmark:   mk,
// 		References: list,
// 	}

// 	return res, nil
// }

// todo: ReferenceByCollection
// func (o ItemContractImpl) ReferenceByCollection(
// 	ctx common.TxCtxInterface,
// 	req *cc.ReferenceByCollectionRequest,
// ) (res *cc.ReferenceByCollectionResponse, err error) {
// 	// Validate the request
// 	if err = ctx.Validate(req); err != nil {
// 		return nil, oops.Wrap(err)
// 	}
// 	list, mk, err := state.ReferenceKeysByCollection(ctx, req.GetCollectionId(), req.GetBookmark(), "")
// 	if err != nil {
// 		return nil, oops.Wrap(err)
// 	}

// 	res = &cc.ReferenceByCollectionResponse{
// 		Bookmark:   mk,
// 		References: list,
// 	}

// 	return res, nil
// }

// todo: ReferenceByItem
func (o ItemContractImpl) ReferenceByItem(
	ctx common.TxCtxInterface,
	req *cc.ReferenceByItemRequest,
) (res *cc.ReferenceByItemResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	list, mk, err := state.ReferenceKeysByItem(ctx, req.GetItemKey(), req.GetBookmark())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	res = &cc.ReferenceByItemResponse{
		Bookmark:   mk,
		References: list,
	}

	return res, nil
}

// ──────────────────────────────────── Invoke ─────────────────────────────────────

// ReferenceCreate creates a reference
func (o ItemContractImpl) ReferenceCreate(
	ctx common.TxCtxInterface,
	req *cc.ReferenceCreateRequest,
) (res *cc.ReferenceCreateResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	if _, err = state.ReferenceCreate(ctx, req.GetRefKey()); err != nil {
		return nil, oops.Wrap(err)
	}

	return &cc.ReferenceCreateResponse{
		RefKey: req.GetRefKey(),
	}, nil
}

// ReferenceDelete deletes a reference
func (o ItemContractImpl) ReferenceDelete(
	ctx common.TxCtxInterface,
	req *cc.ReferenceDeleteRequest,
) (res *cc.ReferenceDeleteResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	if err = state.ReferenceDelete(ctx, req.GetRefKey()); err != nil {
		return nil, oops.Wrap(err)
	}

	return &cc.ReferenceDeleteResponse{
		RefKey: req.GetRefKey(),
	}, nil
}

// ════════════════════════════════════ Suggestions ════════════════════════════════
// ──────────────────────────────────── Query ──────────────────────────────────────

func (o ItemContractImpl) Suggestion(
	ctx common.TxCtxInterface,
	req *cc.SuggestionRequest,
) (res *cc.SuggestionResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	sug := &authpb.Suggestion{
		PrimaryKey:   req.GetItemKey(),
		SuggestionId: req.GetSuggestionId(),
	}

	if err = state.GetSuggestion(ctx, sug); err != nil {
		return nil, oops.Wrap(err)
	}

	return &cc.SuggestionResponse{
		Suggestion: sug,
	}, nil
}

func (o ItemContractImpl) SuggestionListByCollection(
	ctx common.TxCtxInterface,
	req *cc.SuggestionListByCollectionRequest,
) (res *cc.SuggestionListByCollectionResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	list, mk, err := state.SuggestionListByCollection(ctx, req.GetCollectionId(), req.GetBookmark())
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	res = &cc.SuggestionListByCollectionResponse{
		Bookmark:    mk,
		Suggestions: list,
	}

	return res, nil
}

func (o ItemContractImpl) SuggestionByPartialKey(
	ctx common.TxCtxInterface,
	req *cc.SuggestionByPartialKeyRequest,
) (res *cc.SuggestionByPartialKeyResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	sug := &authpb.Suggestion{
		PrimaryKey: req.GetItemKey(),
	}

	list, mk, err := state.PartialSuggestionList(
		ctx,
		sug,
		int(req.GetNumAttrs()),
		req.GetBookmark(),
	)
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	res = &cc.SuggestionByPartialKeyResponse{
		Bookmark:    mk,
		Suggestions: list,
	}

	return res, nil
}

// ──────────────────────────────── Invoke ─────────────────────────────────────────

func (o ItemContractImpl) SuggestionCreate(
	ctx common.TxCtxInterface,
	req *cc.SuggestionCreateRequest,
) (res *cc.SuggestionCreateResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	if err = state.SuggestionCreate(ctx, req.GetSuggestion()); err != nil {
		ctx.GetLogger().Warn("SuggestionCreate", "err", err)
		return nil, oops.Wrap(err)
	}

	return &cc.SuggestionCreateResponse{
		Suggestion: req.GetSuggestion(),
	}, nil
}

func (o ItemContractImpl) SuggestionDelete(
	ctx common.TxCtxInterface,
	req *cc.SuggestionDeleteRequest,
) (res *cc.SuggestionDeleteResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	sug := &authpb.Suggestion{
		PrimaryKey:   req.GetItemKey(),
		SuggestionId: req.GetSuggestionId(),
	}

	if err = state.SuggestionDelete(ctx, sug); err != nil {
		return nil, oops.Wrap(err)
	}

	return &cc.SuggestionDeleteResponse{
		Suggestion: sug,
	}, nil
}

func (o ItemContractImpl) SuggestionApprove(
	ctx common.TxCtxInterface,
	req *cc.SuggestionApproveRequest,
) (res *cc.SuggestionApproveResponse, err error) {
	// Validate the request
	if err = ctx.Validate(req); err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}
	sug := &authpb.Suggestion{
		PrimaryKey:   req.GetItemKey(),
		SuggestionId: req.GetSuggestionId(),
	}

	u, err := state.SuggestionApprove(ctx, sug)
	if err != nil {
		ctx.GetLogger().Error(err.Error(), slog.Any("error", err))
		return nil, oops.Wrap(err)
	}

	if updated, err := common.PackItem(*u); err != nil {
		return nil, oops.Wrap(err)
	} else {
		res = &cc.SuggestionApproveResponse{
			Item:       updated,
			Suggestion: sug,
		}
	}

	return res, nil
}
