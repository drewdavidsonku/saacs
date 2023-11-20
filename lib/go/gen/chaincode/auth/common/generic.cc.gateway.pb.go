// Code generated by proto-gen-go-auth_pb. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: chaincode/auth/common/generic.proto

package common

import (
	json "encoding/json"
	client "github.com/hyperledger/fabric-gateway/pkg/client"
)

// GenericServiceHandler is used to interact with the service with the gateway
type GenericServiceHandler struct {
	ChaincodeName string
	contract      *client.Contract
}

func (s *GenericServiceHandler) GetCurrentUser() (out *GetCurrentUserResponse) {
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName + ":GetCurrentUser")
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) Bootstrap(in *BootstrapRequest) (out *BootstrapResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":Bootstrap", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) AuthorizeOperation(in *AuthorizeOperationRequest) (out *AuthorizeOperationResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":AuthorizeOperation", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) CreateUser() (out *CreateUserResponse) {
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName + ":CreateUser")
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) Get(in *GetRequest) (out *GetResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":Get", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) List(in *ListRequest) (out *ListResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":List", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) ListByCollection(in *ListByCollectionRequest) (out *ListByCollectionResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":ListByCollection", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) ListByAttrs(in *ListByAttrsRequest) (out *ListByAttrsResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":ListByAttrs", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) Create(in *CreateRequest) (out *CreateResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":Create", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) Update(in *UpdateRequest) (out *UpdateResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":Update", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) Delete(in *DeleteRequest) (out *DeleteResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":Delete", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) History(in *HistoryRequest) (out *HistoryResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":History", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) HiddenTx(in *HiddenTxRequest) (out *HiddenTxResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":HiddenTx", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) HideTx(in *HideTxRequest) (out *HideTxResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":HideTx", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) UnHideTx(in *UnHideTxRequest) (out *UnHideTxResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":UnHideTx", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) Reference(in *ReferenceRequest) (out *ReferenceResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":Reference", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) ReferenceListByType(in *ReferenceListByTypeRequest) (out *ReferenceListByTypeResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":ReferenceListByType", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) ReferenceByCollection(in *ReferenceByCollectionRequest) (out *ReferenceByCollectionResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":ReferenceByCollection", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) ReferenceByObject(in *ReferenceByObjectRequest) (out *ReferenceByObjectResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":ReferenceByObject", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) ReferenceCreate(in *ReferenceCreateRequest) (out *ReferenceCreateResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":ReferenceCreate", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) ReferenceDelete(in *ReferenceDeleteRequest) (out *ReferenceDeleteResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":ReferenceDelete", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) Suggestion(in *SuggestionRequest) (out *SuggestionResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":Suggestion", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) SuggestionList(in *SuggestionListRequest) (out *SuggestionListResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":SuggestionList", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) SuggestionListByCollection(in *SuggestionListByCollectionRequest) (out *SuggestionListByCollectionResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":SuggestionListByCollection", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) SuggestionByPartialKey(in *SuggestionByPartialKeyRequest) (out *SuggestionByPartialKeyResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.EvaluateTransaction(s.ChaincodeName+":SuggestionByPartialKey", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) SuggestionCreate(in *SuggestionCreateRequest) (out *SuggestionCreateResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":SuggestionCreate", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) SuggestionDelete(in *SuggestionDeleteRequest) (out *SuggestionDeleteResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":SuggestionDelete", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
func (s *GenericServiceHandler) SuggestionApprove(in *SuggestionApproveRequest) (out *SuggestionApproveResponse) {
	inBytes, err := json.Marshal(in)
	if err != nil {
		return nil
	}
	evaluateResult, err := s.contract.SubmitTransaction(s.ChaincodeName+":SuggestionApprove", string(inBytes))
	if err != nil {
		return nil
	}
	err = json.Unmarshal(evaluateResult, &out)
	if err != nil {
		return nil
	}
	return out
}
