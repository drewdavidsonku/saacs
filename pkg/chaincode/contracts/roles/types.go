package roles

import (
	"github.com/nova38/saacs/pkg/chaincode/common"
	"github.com/nova38/saacs/pkg/chaincode/contracts/base"
	"github.com/nova38/saacs/pkg/chaincode/state"

	authpb "github.com/nova38/saacs/pkg/chaincode/gen/auth/v1"
	cc "github.com/nova38/saacs/pkg/chaincode/gen/chaincode/common"
)

type (
	TxCtx struct {
		state.BaseTxCtx
		UserRoles map[string][]*authpb.Role
	}

	RoleContract struct {
		base.ItemContractImpl
	}
)

// type checking
var (
	_ common.TxCtxInterface = (*TxCtx)(
		nil,
	) // _ contracts.ItemContractInterface = (*IdentityContract)(nil)
	// see if ItemContractImpl implements the interface GenericServiceInterface
	_ cc.GenericServiceInterface[common.TxCtxInterface] = (*RoleContract)(nil)
)
