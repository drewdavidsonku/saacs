package roles

import (
	"fmt"
	"log/slog"

	v1 "github.com/nova38/thesis/packages/saacs/gen/auth/v1"
	cc "github.com/nova38/thesis/packages/saacs/gen/chaincode/common"
	"github.com/nova38/thesis/packages/saacs/serializer"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
	"github.com/nova38/thesis/packages/saacs/common"
	"github.com/nova38/thesis/packages/saacs/state"
	"github.com/samber/lo"
	"github.com/samber/oops"
)

// BeforeTransaction is the before transaction handler
func BeforeTransaction(ctx common.TxCtxInterface) (err error) {
	defer func() { ctx.HandleFnError(&err, recover()) }()

	if err = ctx.HandelBefore(); err != nil {
		return oops.Wrap(err)
	}

	return nil
}

// BuildContract builds the roles contract
func BuildContract() *contractapi.ContractChaincode {
	contract := new(RoleContract)
	contract.BeforeTransaction = BeforeTransaction
	contract.TransactionContextHandler = new(TxCtx)

	sm, err := contractapi.NewChaincode(contract)
	if err != nil {
		fmt.Printf("Error creating No Auth contract: %s", err)
		panic(err)
	}
	sm.TransactionSerializer = &serializer.TxSerializer{}

	return sm
}

// ═════════════════════════════════════════════
// Additional Functions for the NoAuthContract
// ═════════════════════════════════════════════

func (c *RoleContract) Bootstrap(
	ctx common.TxCtxInterface,
	req *cc.BootstrapRequest,
) (res *cc.BootstrapResponse, err error) {
	defer func() { ctx.HandleFnError(&err, recover()) }()

	ctx, ok := ctx.(*TxCtx)
	if !ok {
		return nil, oops.Errorf("Invalid context")
	}

	ctx.GetLogger().Info("NoAuthContract.Bootstrap")
	if err = ctx.Validate(req); err != nil {
		ctx.LogError(err)
		return nil, oops.Wrap(err)
	}

	// Check to see if the bootstrap has already been done
	// If so, return an error
	if bootstraped, err := ctx.CheckBootstrap(); err != nil {
		return nil, oops.Wrap(err)
	} else if bootstraped {
		ctx.GetLogger().Warn("Bootstrap already done")
		return nil, oops.Errorf("Bootstrap already done")
	}

	for _, col := range req.GetCollections() {

		lo.Must0(c.CreateCollection(ctx, &cc.CreateCollectionRequest{Collection: col}))
	}

	return &cc.BootstrapResponse{Success: true}, nil
}

func (c *RoleContract) CreateCollection(
	ctx common.TxCtxInterface,
	req *cc.CreateCollectionRequest,
) (res *cc.CreateCollectionResponse, err error) {
	defer func() { ctx.HandleFnError(&err, recover()) }()
	ctx.GetLogger().Info("RoleContract.CreateCollection")

	col := req.GetCollection()
	user, err := ctx.GetUserId()
	if err != nil {
		return nil, oops.Wrap(err)
	}

	if state.Exists(ctx, col) {
		return nil, oops.Errorf("Collection already exists")
	}

	col.AuthType = v1.AuthType_AUTH_TYPE_ROLE

	// Add the auth types to the collection
	role := &v1.Role{
		CollectionId: col.GetCollectionId(),
		RoleId:       "manager",
		Polices: &v1.Polices{
			ItemPolicies: map[string]*v1.PathPolicy{},
			DefaultPolicy: &v1.PathPolicy{
				Path:          "",
				FullPath:      "",
				AllowSubPaths: false,
				Actions: []v1.Action{
					v1.Action_ACTION_UTILITY,
					v1.Action_ACTION_VIEW,
					v1.Action_ACTION_CREATE,
					v1.Action_ACTION_UPDATE,
					v1.Action_ACTION_DELETE,
					v1.Action_ACTION_SUGGEST_VIEW,
					v1.Action_ACTION_SUGGEST_CREATE,
					v1.Action_ACTION_SUGGEST_DELETE,
					v1.Action_ACTION_SUGGEST_APPROVE,
					v1.Action_ACTION_VIEW_HISTORY,
					v1.Action_ACTION_VIEW_HIDDEN_TXS,
					v1.Action_ACTION_HIDE_TX,
					v1.Action_ACTION_REFERENCE_CREATE,
					v1.Action_ACTION_REFERENCE_DELETE,
					v1.Action_ACTION_REFERENCE_VIEW,
				},
			},
		},
		Note:          "Default Admin Role",
		ParentRoleIds: []string{},
	}
	userRole := &v1.UserCollectionRoles{
		CollectionId: col.GetCollectionId(),
		MspId:        user.GetMspId(),
		UserId:       user.GetUserId(),
		RoleIds:      []string{"manager"},
	}

	col.ItemTypes = append(col.GetItemTypes(), []string{role.ItemType(), userRole.ItemType()}...)
	col.ItemTypes = lo.Uniq(col.GetItemTypes())

	if err = (state.Ledger[*v1.Collection]{}.PrimaryCreate(ctx, col)); err != nil {
		return nil, oops.Wrap(err)
	}

	if err = (state.Ledger[*v1.Role]{}.PrimaryCreate(ctx, role)); err != nil {
		return nil, oops.Wrap(err)
	}
	if err = (state.Ledger[*v1.UserCollectionRoles]{}.PrimaryCreate(ctx, userRole)); err != nil {
		return nil, oops.Wrap(err)
	}

	ctx.GetLogger().Info("Bootstrapping",
		slog.Any("role", role),
		slog.Any("userRole", userRole),
	)

	return &cc.CreateCollectionResponse{Collection: col}, nil
}
