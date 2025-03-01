package models

import (
	"log/slog"

	"github.com/nova38/saacs/pkg/saacs-cc/auth/policy"
	"github.com/nova38/saacs/pkg/saacs-cc/common"
	"github.com/nova38/saacs/pkg/saacs-cc/state"
	authpb "github.com/nova38/saacs/pkg/saacs-protos/saacs/auth/v0"
	pb "github.com/nova38/saacs/pkg/saacs-protos/saacs/common/v0"

	"github.com/samber/lo"
	"github.com/samber/oops"
)

type RBAC struct {
	TxCtx  common.TxCtxInterface
	Logger *slog.Logger

	Collection *authpb.Collection
	UserRoles  map[string][]*authpb.Role
}

//nolint:dupl
func (ac *RBAC) Authorize(op *pb.Operation) (bool, error) {

	// ═════════════════════════════════════════════
	// Default Policy
	// ═════════════════════════════════════════════
	if auth, err := policy.AuthorizedPolicy(ac.Collection.GetDefault(), op); err != nil {
		return false, oops.Wrap(err)
	} else if auth {
		ac.Logger.Info("User is authorized by default")
		return true, nil
	}

	// ═════════════════════════════════════════════
	// Check Role Membership
	// ═════════════════════════════════════════════
	roles, err := ac.getUserRoles(op.GetCollectionId())
	if err != nil {
		return false, oops.Wrap(err)
	}

	for _, role := range roles {
		ac.Logger.Info("Role", "role", role)
		if auth, err := policy.AuthorizedPolicy(role.GetPolices(), op); err != nil {
			return false, oops.Wrap(err)
		} else if auth {
			ac.Logger.Info("User is authorized by role")
			return true, nil
		}
	}

	if ac.Collection.GetUseAuthParents() {
		if auth, checked, err := ac.checkParents(roles, []string{}, op); err != nil {
			return false, oops.Wrap(err)
		} else if auth {
			ac.Logger.Info("User is authorized by parent role")
			return true, nil
		} else {
			ac.Logger.Info("User is not authorized by parent role", "checked", checked)
		}
	}

	return false, nil
}

func (ac *RBAC) getUserRoles(collectionId string) ([]*authpb.Role, error) {

	if collectionId == "" {
		return nil, oops.Errorf("collectionId is empty")
	}

	// If we chached the user roles, return them
	if ac.UserRoles == nil {
		ac.UserRoles = map[string][]*authpb.Role{}
	} else if roles, ok := ac.UserRoles[collectionId]; ok {
		return roles, nil
	}

	user, err := ac.TxCtx.GetUserId()
	if err != nil {
		return nil, oops.Wrap(err)
	}

	userRoles := &authpb.UserCollectionRoles{
		CollectionId: collectionId,
		MspId:        user.GetMspId(),
		UserId:       user.GetUserId(),
		RoleIds:      []string{},
	}

	if err := state.Get(ac.TxCtx, userRoles); err != nil {
		return nil, oops.Wrap(err)
	}

	roles, err := ac.getRoles(collectionId, userRoles.GetRoleIds())
	if err != nil {
		return nil, oops.Wrap(err)
	}

	ac.UserRoles[collectionId] = roles

	return roles, nil
}

//nolint:dupl
func (ac *RBAC) getRoles(collectionId string, roleIDs []string) ([]*authpb.Role, error) {
	var roles []*authpb.Role

	for _, roleId := range roleIDs {
		role := &authpb.Role{
			CollectionId: collectionId,
			RoleId:       roleId,
		}

		if err := state.Get(ac.TxCtx, role); err != nil {
			return nil, oops.Wrap(err)
		}

		roles = append(roles, role)
	}

	return roles, nil
}

//nolint:dupl
func (ac *RBAC) checkParents(
	roles []*authpb.Role,
	checked []string,
	op *pb.Operation,
) (bool, []string, error) {

	var parents []string

	for _, role := range roles {
		parents = append(parents, role.GetParentRoleIds()...)
	}

	parents = lo.Uniq(parents)
	ac.Logger.Debug("New Parent RolesIds To check", "parents", parents)

	parentRoles, err := ac.getNewParents(checked, parents)
	if err != nil {
		return false, nil, oops.Hint("Failed to get new parrents").Wrap(err)
	}

	for _, role := range parentRoles {
		if auth, err := policy.AuthorizedPolicy(role.GetPolices(), op); err != nil {
			return false, nil, oops.Wrap(err)
		} else if auth {
			ac.Logger.Info("User is authorized by parrent role", slog.Group("auth", slog.Any("role", role), slog.Any("op", op)))
			return true, checked, nil
		}
		checked = append(checked, role.GetRoleId())

		var auth bool

		auth, checked, err = ac.checkParents([]*authpb.Role{role}, checked, op)
		if err != nil {
			return false, checked, oops.Wrap(err)
		}

		if auth {
			return true, checked, nil
		}
	}

	return false, checked, nil
}

func (ac *RBAC) getNewParents(checked []string, parents []string) ([]*authpb.Role, error) {

	parents = lo.Uniq(parents)

	unchecked, _ := lo.Difference(parents, checked)

	if len(unchecked) == 0 {
		return nil, nil
	}

	var roles []*authpb.Role

	for _, roleId := range unchecked {
		role := &authpb.Role{
			RoleId: roleId,
		}

		if err := state.Get(ac.TxCtx, role); err != nil {
			return nil, oops.Wrap(err)
		}

		roles = append(roles, role)
	}

	return roles, nil
}
