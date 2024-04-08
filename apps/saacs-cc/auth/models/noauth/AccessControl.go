package noauth

import (
	"log/slog"

	"github.com/nova38/saacs/apps/saacs-cc/common"
	authpb "github.com/nova38/saacs/libs/saacs-protos-go/auth/v1"
)

type NoAuth struct {
	Collection *authpb.Collection

	TxCtx  common.TxCtxInterface
	Logger *slog.Logger
}

func (ac *NoAuth) Authorize(ops []*authpb.Operation) (bool, error) {

	return true, nil
}