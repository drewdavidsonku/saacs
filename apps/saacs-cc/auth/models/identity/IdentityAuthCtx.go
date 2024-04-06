package identity

import (
	"github.com/nova38/saacs/apps/saacs-cc/auth/policy"
	"github.com/nova38/saacs/apps/saacs-cc/common"
	authpb "github.com/nova38/saacs/libs/saacs-protos-go/auth/v1"
	"github.com/samber/oops"
)

type AuthTxCtx struct {
	CollectionMemberships map[string]*authpb.UserDirectMembership

	TxCtx common.TxCtxInterface
}

func (ctx *AuthTxCtx) SetTxCtx(txCtx common.TxCtxInterface) {
	ctx.TxCtx = txCtx
}

func (ctx *AuthTxCtx) GetUserDirectMembership(
	collectionId string,
) (*authpb.UserDirectMembership, error) {

	if ctx.CollectionMemberships == nil {
		ctx.CollectionMemberships = make(map[string]*authpb.UserDirectMembership)
	}

	if membership, ok := ctx.CollectionMemberships[collectionId]; ok {
		return membership, nil
	}

	user, err := ctx.TxCtx.GetUserId()
	if err != nil {
		return nil, err
	}

	membership := &authpb.UserDirectMembership{
		CollectionId: collectionId,
		MspId:        user.GetMspId(),
		UserId:       user.GetUserId(),
	}

	if err = state.Get(ctx, membership); err != nil {
		return nil, oops.Wrap(err)
	}

	ctx.CollectionMemberships[collectionId] = membership

	return membership, nil
}

// ──────────────────────────────── Query ────────────────────────────────────────

func (ctx *AuthTxCtx) Authorize(ops []*authpb.Operation) (bool, error) {

	ctx.GetLogger().Info("NoAuthContract.Authenticate")

	for _, op := range ops {
		if auth, err := ctx.authorized(op); err != nil {
			return false, oops.Wrap(err)
		} else if !auth {
			ctx.Logger.Info("User is not authorized")
			return false, nil
		}
	}

	return true, nil
}

func (ctx *AuthTxCtx) authorized(op *authpb.Operation) (bool, error) {
	ctx.GetLogger().Info(op.String())

	// Handle special case of creating a collection
	if op.GetItemType() == "auth.Collection" {
		if op.GetAction() == authpb.Action_ACTION_CREATE {
			ctx.Logger.Info(
				"User is authorized to create a collection",
				slog.Group("auth", "collection", op.GetCollectionId()),
			)
			return true, nil
		}
	}

	// Get the collection
	col, err := ctx.GetCollection(op.GetCollectionId())
	if err != nil {
		return false, oops.Wrap(err)
	}

	// Validate the operation
	if valid, err := policy.ValidateOperation(col, op); err != nil {
		return false, oops.Hint("Invalid Operation").Wrap(err)
	} else if !valid {
		return false, nil
	}

	// TODO: Check if the action is allowed for any user in the collection

	// ═════════════════════════════════════════════
	// Default Policy
	// ═════════════════════════════════════════════

	if auth, err := policy.AuthorizedPolicy(col.GetDefault(), op); err != nil {
		return false, oops.Wrap(err)
	} else if auth {
		ctx.Logger.Info("User is authorized by default")
		return true, nil
	}
	// ═════════════════════════════════════════════
	// Check Membership
	// ═════════════════════════════════════════════

	// Get the user membership
	membership, err := ctx.GetUserDirectMembership(op.GetCollectionId())
	if err != nil {
		return false, oops.Wrap(err)
	}
	if membership == nil {
		ctx.Logger.Info(
			"User is not a member of the collection",
			slog.Group("auth", "collection", op.GetCollectionId()),
		)
		return false, nil
	}

	if auth, err := policy.AuthorizedPolicy(membership.GetPolices(), op); err != nil {
		return false, oops.Wrap(err)
	} else if auth {
		ctx.Logger.Info("User is authorized by membership")
		return true, nil
	}

	return false, nil
}