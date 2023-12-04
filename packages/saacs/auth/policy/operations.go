package policy

import (
	"slices"

	authpb "github.com/nova38/thesis/packages/saacs/gen/auth/v1"
	"github.com/samber/oops"
)

// ValidateOperation validates an operation against a collection,
// returns true if valid, false otherwise.
// Checks:
// - Collection is not nil
// - Operation is not nil
// - Collection item types is not nil and not empty
// - Checks per the type of action (see below)
func ValidateOperation(collection *authpb.Collection, op *authpb.Operation) (bool, error) {
	// Sanity checks
	if collection == nil || op == nil {
		return false, oops.Errorf("Collection or Operation is nil")
	}

	// Checks for nil and empty cases
	switch {
	case collection == nil:
		return false, oops.Errorf("Collection is nil")
	case op == nil:
		return false, oops.Errorf("Operations is nil")

	case collection.GetItemTypes() == nil:
		return false, oops.Errorf("Collection item types is nil")
	case collection.GetItemTypes() != nil && len(collection.GetItemTypes()) == 0:
		return false, oops.Errorf("Collection item types is empty")

	case op.GetCollectionId() == "":
		return false, oops.Errorf("Operation collection id is empty")
	case op.GetItemType() == "":
		return false, oops.Errorf("Operation item type is empty")
	case op.GetAction() == authpb.Action_ACTION_UNSPECIFIED:
		return false, oops.Errorf("Operation action is empty")

	}

	// Checks for validity against collection according to action type
	switch op.GetAction() {

	case
		authpb.Action_ACTION_CREATE,
		authpb.Action_ACTION_DELETE,
		authpb.Action_ACTION_HIDE_TX,
		authpb.Action_ACTION_VIEW_HISTORY,
		authpb.Action_ACTION_VIEW_HIDDEN_TXS:

		found := slices.Contains(collection.GetItemTypes(), op.GetItemType())
		if !found {
			return false, oops.Errorf(
				"Operation item type %v is not in collection %v item types",
				op.GetItemType(),
				op.GetCollectionId(),
			)
		}

		if op.GetPaths() != nil && len(op.GetPaths().GetPaths()) > 0 {
			return false, oops.Errorf("Operation paths is not empty")
		}

		// Actions who might have paths
	case
		authpb.Action_ACTION_UPDATE,
		authpb.Action_ACTION_VIEW,
		authpb.Action_ACTION_SUGGEST_CREATE,
		authpb.Action_ACTION_SUGGEST_DELETE,
		authpb.Action_ACTION_SUGGEST_APPROVE:

		found := slices.Contains(collection.GetItemTypes(), op.GetItemType())
		if !found {
			return false, oops.Errorf(
				"Operation item type %v is not in collection %v 's item types",
				op.GetItemType(),
				op.GetCollectionId(),
			)
		}
	}

	return true, nil
}

// --------------------------------------------------

func ActionOnPathPolicy(p *authpb.PathPolicy, action authpb.Action) (authorized bool, found bool) {
	if p == nil && p.GetActions() == nil {
		return false, false
	}

	for _, a := range p.GetActions() {
		if a == action {
			return true, true
		}
	}

	return false, false
}