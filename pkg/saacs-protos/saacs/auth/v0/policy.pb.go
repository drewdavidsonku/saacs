// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: saacs/auth/v0/policy.proto

package v0

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	v0 "github.com/nova38/saacs/pkg/saacs-protos/saacs/common/v0"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/descriptorpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Polices struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// key is the item type
	ItemPolicies map[string]*PathPolicy `protobuf:"bytes,1,rep,name=item_policies,json=itemPolicies,proto3" json:"item_policies,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Default policy for all items
	DefaultPolicy *PathPolicy `protobuf:"bytes,2,opt,name=default_policy,json=defaultPolicy,proto3" json:"default_policy,omitempty"`
	// The types that are excluded from the default policy
	DefaultExcludedTypes []string `protobuf:"bytes,3,rep,name=default_excluded_types,json=defaultExcludedTypes,proto3" json:"default_excluded_types,omitempty"`
}

func (x *Polices) Reset() {
	*x = Polices{}
	if protoimpl.UnsafeEnabled {
		mi := &file_saacs_auth_v0_policy_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Polices) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Polices) ProtoMessage() {}

func (x *Polices) ProtoReflect() protoreflect.Message {
	mi := &file_saacs_auth_v0_policy_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Polices.ProtoReflect.Descriptor instead.
func (*Polices) Descriptor() ([]byte, []int) {
	return file_saacs_auth_v0_policy_proto_rawDescGZIP(), []int{0}
}

func (x *Polices) GetItemPolicies() map[string]*PathPolicy {
	if x != nil {
		return x.ItemPolicies
	}
	return nil
}

func (x *Polices) GetDefaultPolicy() *PathPolicy {
	if x != nil {
		return x.DefaultPolicy
	}
	return nil
}

func (x *Polices) GetDefaultExcludedTypes() []string {
	if x != nil {
		return x.DefaultExcludedTypes
	}
	return nil
}

// This message is the tree node for operations on the state item
type PathPolicy struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The path is a sub path of a field mask
	Path          string `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	FullPath      string `protobuf:"bytes,2,opt,name=full_path,json=fullPath,proto3" json:"full_path,omitempty"`
	AllowSubPaths bool   `protobuf:"varint,3,opt,name=allow_sub_paths,json=allowSubPaths,proto3" json:"allow_sub_paths,omitempty"`
	// The key is a valid sub path in the type of state item
	SubPaths map[string]*PathPolicy `protobuf:"bytes,4,rep,name=sub_paths,json=subPaths,proto3" json:"sub_paths,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// If the policy is not set than use a parent policy unless nested policy is set
	Actions []v0.Action `protobuf:"varint,5,rep,packed,name=actions,proto3,enum=saacs.common.v0.Action" json:"actions,omitempty"`
}

func (x *PathPolicy) Reset() {
	*x = PathPolicy{}
	if protoimpl.UnsafeEnabled {
		mi := &file_saacs_auth_v0_policy_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PathPolicy) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PathPolicy) ProtoMessage() {}

func (x *PathPolicy) ProtoReflect() protoreflect.Message {
	mi := &file_saacs_auth_v0_policy_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PathPolicy.ProtoReflect.Descriptor instead.
func (*PathPolicy) Descriptor() ([]byte, []int) {
	return file_saacs_auth_v0_policy_proto_rawDescGZIP(), []int{1}
}

func (x *PathPolicy) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *PathPolicy) GetFullPath() string {
	if x != nil {
		return x.FullPath
	}
	return ""
}

func (x *PathPolicy) GetAllowSubPaths() bool {
	if x != nil {
		return x.AllowSubPaths
	}
	return false
}

func (x *PathPolicy) GetSubPaths() map[string]*PathPolicy {
	if x != nil {
		return x.SubPaths
	}
	return nil
}

func (x *PathPolicy) GetActions() []v0.Action {
	if x != nil {
		return x.Actions
	}
	return nil
}

var File_saacs_auth_v0_policy_proto protoreflect.FileDescriptor

var file_saacs_auth_v0_policy_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2f, 0x76, 0x30, 0x2f,
	0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x73, 0x61,
	0x61, 0x63, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x30, 0x1a, 0x1b, 0x62, 0x75, 0x66,
	0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61,
	0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x73, 0x61, 0x61, 0x63,
	0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x30, 0x2f, 0x65, 0x6e, 0x75, 0x6d,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xac, 0x02, 0x0a, 0x07, 0x50, 0x6f, 0x6c, 0x69,
	0x63, 0x65, 0x73, 0x12, 0x4d, 0x0a, 0x0d, 0x69, 0x74, 0x65, 0x6d, 0x5f, 0x70, 0x6f, 0x6c, 0x69,
	0x63, 0x69, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x73, 0x61, 0x61,
	0x63, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x30, 0x2e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x49, 0x74, 0x65, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x52, 0x0c, 0x69, 0x74, 0x65, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x69,
	0x65, 0x73, 0x12, 0x40, 0x0a, 0x0e, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x5f, 0x70, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x73, 0x61, 0x61,
	0x63, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x30, 0x2e, 0x50, 0x61, 0x74, 0x68, 0x50,
	0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x0d, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x12, 0x34, 0x0a, 0x16, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x5f,
	0x65, 0x78, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x64, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x18, 0x03,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x14, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x45, 0x78, 0x63,
	0x6c, 0x75, 0x64, 0x65, 0x64, 0x54, 0x79, 0x70, 0x65, 0x73, 0x1a, 0x5a, 0x0a, 0x11, 0x49, 0x74,
	0x65, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12,
	0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65,
	0x79, 0x12, 0x2f, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x19, 0x2e, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x30,
	0x2e, 0x50, 0x61, 0x74, 0x68, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x9d, 0x03, 0x0a, 0x0a, 0x50, 0x61, 0x74, 0x68, 0x50,
	0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x75, 0x6c,
	0x6c, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x75,
	0x6c, 0x6c, 0x50, 0x61, 0x74, 0x68, 0x12, 0x26, 0x0a, 0x0f, 0x61, 0x6c, 0x6c, 0x6f, 0x77, 0x5f,
	0x73, 0x75, 0x62, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0d, 0x61, 0x6c, 0x6c, 0x6f, 0x77, 0x53, 0x75, 0x62, 0x50, 0x61, 0x74, 0x68, 0x73, 0x12, 0x44,
	0x0a, 0x09, 0x73, 0x75, 0x62, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x27, 0x2e, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76,
	0x30, 0x2e, 0x50, 0x61, 0x74, 0x68, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x2e, 0x53, 0x75, 0x62,
	0x50, 0x61, 0x74, 0x68, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x73, 0x75, 0x62, 0x50,
	0x61, 0x74, 0x68, 0x73, 0x12, 0x31, 0x0a, 0x07, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18,
	0x05, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x30, 0x2e, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x07,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0x56, 0x0a, 0x0d, 0x53, 0x75, 0x62, 0x50, 0x61,
	0x74, 0x68, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2f, 0x0a, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x73, 0x61, 0x61, 0x63,
	0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x30, 0x2e, 0x50, 0x61, 0x74, 0x68, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x3a,
	0x65, 0xba, 0x48, 0x62, 0x1a, 0x60, 0x0a, 0x0f, 0x53, 0x75, 0x62, 0x50, 0x61, 0x74, 0x68, 0x73,
	0x41, 0x6c, 0x6c, 0x6f, 0x77, 0x65, 0x64, 0x12, 0x19, 0x53, 0x75, 0x62, 0x20, 0x50, 0x61, 0x74,
	0x68, 0x73, 0x20, 0x61, 0x72, 0x65, 0x20, 0x6e, 0x6f, 0x74, 0x20, 0x61, 0x6c, 0x6c, 0x6f, 0x77,
	0x65, 0x64, 0x1a, 0x32, 0x21, 0x74, 0x68, 0x69, 0x73, 0x2e, 0x61, 0x6c, 0x6c, 0x6f, 0x77, 0x5f,
	0x73, 0x75, 0x62, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x73, 0x20, 0x26, 0x26, 0x20, 0x74, 0x68, 0x69,
	0x73, 0x2e, 0x73, 0x75, 0x62, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x73, 0x2e, 0x73, 0x69, 0x7a, 0x65,
	0x28, 0x29, 0x20, 0x3e, 0x20, 0x30, 0x42, 0xae, 0x01, 0x0a, 0x11, 0x63, 0x6f, 0x6d, 0x2e, 0x73,
	0x61, 0x61, 0x63, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x30, 0x42, 0x0b, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6e, 0x6f, 0x76, 0x61, 0x33, 0x38, 0x2f, 0x73,
	0x61, 0x61, 0x63, 0x73, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2d, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x61, 0x75, 0x74, 0x68,
	0x2f, 0x76, 0x30, 0xa2, 0x02, 0x03, 0x53, 0x41, 0x56, 0xaa, 0x02, 0x0d, 0x53, 0x61, 0x61, 0x63,
	0x73, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x2e, 0x56, 0x30, 0xca, 0x02, 0x0d, 0x53, 0x61, 0x61, 0x63,
	0x73, 0x5c, 0x41, 0x75, 0x74, 0x68, 0x5c, 0x56, 0x30, 0xe2, 0x02, 0x19, 0x53, 0x61, 0x61, 0x63,
	0x73, 0x5c, 0x41, 0x75, 0x74, 0x68, 0x5c, 0x56, 0x30, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0f, 0x53, 0x61, 0x61, 0x63, 0x73, 0x3a, 0x3a, 0x41,
	0x75, 0x74, 0x68, 0x3a, 0x3a, 0x56, 0x30, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_saacs_auth_v0_policy_proto_rawDescOnce sync.Once
	file_saacs_auth_v0_policy_proto_rawDescData = file_saacs_auth_v0_policy_proto_rawDesc
)

func file_saacs_auth_v0_policy_proto_rawDescGZIP() []byte {
	file_saacs_auth_v0_policy_proto_rawDescOnce.Do(func() {
		file_saacs_auth_v0_policy_proto_rawDescData = protoimpl.X.CompressGZIP(file_saacs_auth_v0_policy_proto_rawDescData)
	})
	return file_saacs_auth_v0_policy_proto_rawDescData
}

var file_saacs_auth_v0_policy_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_saacs_auth_v0_policy_proto_goTypes = []interface{}{
	(*Polices)(nil),    // 0: saacs.auth.v0.Polices
	(*PathPolicy)(nil), // 1: saacs.auth.v0.PathPolicy
	nil,                // 2: saacs.auth.v0.Polices.ItemPoliciesEntry
	nil,                // 3: saacs.auth.v0.PathPolicy.SubPathsEntry
	(v0.Action)(0),     // 4: saacs.common.v0.Action
}
var file_saacs_auth_v0_policy_proto_depIdxs = []int32{
	2, // 0: saacs.auth.v0.Polices.item_policies:type_name -> saacs.auth.v0.Polices.ItemPoliciesEntry
	1, // 1: saacs.auth.v0.Polices.default_policy:type_name -> saacs.auth.v0.PathPolicy
	3, // 2: saacs.auth.v0.PathPolicy.sub_paths:type_name -> saacs.auth.v0.PathPolicy.SubPathsEntry
	4, // 3: saacs.auth.v0.PathPolicy.actions:type_name -> saacs.common.v0.Action
	1, // 4: saacs.auth.v0.Polices.ItemPoliciesEntry.value:type_name -> saacs.auth.v0.PathPolicy
	1, // 5: saacs.auth.v0.PathPolicy.SubPathsEntry.value:type_name -> saacs.auth.v0.PathPolicy
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_saacs_auth_v0_policy_proto_init() }
func file_saacs_auth_v0_policy_proto_init() {
	if File_saacs_auth_v0_policy_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_saacs_auth_v0_policy_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Polices); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_saacs_auth_v0_policy_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PathPolicy); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_saacs_auth_v0_policy_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_saacs_auth_v0_policy_proto_goTypes,
		DependencyIndexes: file_saacs_auth_v0_policy_proto_depIdxs,
		MessageInfos:      file_saacs_auth_v0_policy_proto_msgTypes,
	}.Build()
	File_saacs_auth_v0_policy_proto = out.File
	file_saacs_auth_v0_policy_proto_rawDesc = nil
	file_saacs_auth_v0_policy_proto_goTypes = nil
	file_saacs_auth_v0_policy_proto_depIdxs = nil
}
