// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: saacs/common/v0/enums.proto

package v0

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type TransactionType int32

const (
	TransactionType_TRANSACTION_TYPE_UNSPECIFIED TransactionType = 0
	TransactionType_TRANSACTION_TYPE_INVOKE      TransactionType = 1
	TransactionType_TRANSACTION_TYPE_QUERY       TransactionType = 2
)

// Enum value maps for TransactionType.
var (
	TransactionType_name = map[int32]string{
		0: "TRANSACTION_TYPE_UNSPECIFIED",
		1: "TRANSACTION_TYPE_INVOKE",
		2: "TRANSACTION_TYPE_QUERY",
	}
	TransactionType_value = map[string]int32{
		"TRANSACTION_TYPE_UNSPECIFIED": 0,
		"TRANSACTION_TYPE_INVOKE":      1,
		"TRANSACTION_TYPE_QUERY":       2,
	}
)

func (x TransactionType) Enum() *TransactionType {
	p := new(TransactionType)
	*p = x
	return p
}

func (x TransactionType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TransactionType) Descriptor() protoreflect.EnumDescriptor {
	return file_saacs_common_v0_enums_proto_enumTypes[0].Descriptor()
}

func (TransactionType) Type() protoreflect.EnumType {
	return &file_saacs_common_v0_enums_proto_enumTypes[0]
}

func (x TransactionType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TransactionType.Descriptor instead.
func (TransactionType) EnumDescriptor() ([]byte, []int) {
	return file_saacs_common_v0_enums_proto_rawDescGZIP(), []int{0}
}

type ItemKind int32

const (
	ItemKind_ITEM_KIND_UNSPECIFIED ItemKind = 0
	// ITEM_KIND_GLOBAL_ITEM = 1;
	// Item's key := {COLLECTION_ID}{TYPE}[...key_paths]
	ItemKind_ITEM_KIND_PRIMARY_ITEM ItemKind = 2
	// Item's key := {COLLECTION_ID}{TYPE}<PrimaryKey>{...key_paths}
	ItemKind_ITEM_KIND_SUB_ITEM  ItemKind = 3
	ItemKind_ITEM_KIND_REFERENCE ItemKind = 4
)

// Enum value maps for ItemKind.
var (
	ItemKind_name = map[int32]string{
		0: "ITEM_KIND_UNSPECIFIED",
		2: "ITEM_KIND_PRIMARY_ITEM",
		3: "ITEM_KIND_SUB_ITEM",
		4: "ITEM_KIND_REFERENCE",
	}
	ItemKind_value = map[string]int32{
		"ITEM_KIND_UNSPECIFIED":  0,
		"ITEM_KIND_PRIMARY_ITEM": 2,
		"ITEM_KIND_SUB_ITEM":     3,
		"ITEM_KIND_REFERENCE":    4,
	}
)

func (x ItemKind) Enum() *ItemKind {
	p := new(ItemKind)
	*p = x
	return p
}

func (x ItemKind) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ItemKind) Descriptor() protoreflect.EnumDescriptor {
	return file_saacs_common_v0_enums_proto_enumTypes[1].Descriptor()
}

func (ItemKind) Type() protoreflect.EnumType {
	return &file_saacs_common_v0_enums_proto_enumTypes[1]
}

func (x ItemKind) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ItemKind.Descriptor instead.
func (ItemKind) EnumDescriptor() ([]byte, []int) {
	return file_saacs_common_v0_enums_proto_rawDescGZIP(), []int{1}
}

type Action int32

const (
	// Should throw an error if used
	Action_ACTION_UNSPECIFIED Action = 0
	Action_ACTION_UTILITY     Action = 1
	// View the contents of an item
	Action_ACTION_VIEW Action = 10
	// Create a new item
	//   - key must not already exist
	Action_ACTION_CREATE Action = 11
	// Update an existing item
	//   - key must already exist
	//   - potential has paths
	Action_ACTION_UPDATE Action = 12
	// Delete an existing item, key must already exist
	Action_ACTION_DELETE Action = 13
	// Suggest a change to an item, key must already exist
	Action_ACTION_SUGGEST_VIEW Action = 14
	// Suggest a change to an item, key must already exist
	Action_ACTION_SUGGEST_CREATE Action = 15
	// Delete a suggestion, key must already exist
	Action_ACTION_SUGGEST_DELETE Action = 16
	// Approve a suggestion and apply it to the item, key must already exist
	Action_ACTION_SUGGEST_APPROVE    Action = 17
	Action_ACTION_VIEW_HISTORY       Action = 18
	Action_ACTION_VIEW_HIDDEN_TXS    Action = 19
	Action_ACTION_HIDE_TX            Action = 20
	Action_ACTION_UNHIDE_TX          Action = 21
	Action_ACTION_HIDE_MSP_TX        Action = 22
	Action_ACTION_UNHIDE_MSP_TX      Action = 23
	Action_ACTION_VIEW_MSP_HIDDEN_TX Action = 24
)

// Enum value maps for Action.
var (
	Action_name = map[int32]string{
		0:  "ACTION_UNSPECIFIED",
		1:  "ACTION_UTILITY",
		10: "ACTION_VIEW",
		11: "ACTION_CREATE",
		12: "ACTION_UPDATE",
		13: "ACTION_DELETE",
		14: "ACTION_SUGGEST_VIEW",
		15: "ACTION_SUGGEST_CREATE",
		16: "ACTION_SUGGEST_DELETE",
		17: "ACTION_SUGGEST_APPROVE",
		18: "ACTION_VIEW_HISTORY",
		19: "ACTION_VIEW_HIDDEN_TXS",
		20: "ACTION_HIDE_TX",
		21: "ACTION_UNHIDE_TX",
		22: "ACTION_HIDE_MSP_TX",
		23: "ACTION_UNHIDE_MSP_TX",
		24: "ACTION_VIEW_MSP_HIDDEN_TX",
	}
	Action_value = map[string]int32{
		"ACTION_UNSPECIFIED":        0,
		"ACTION_UTILITY":            1,
		"ACTION_VIEW":               10,
		"ACTION_CREATE":             11,
		"ACTION_UPDATE":             12,
		"ACTION_DELETE":             13,
		"ACTION_SUGGEST_VIEW":       14,
		"ACTION_SUGGEST_CREATE":     15,
		"ACTION_SUGGEST_DELETE":     16,
		"ACTION_SUGGEST_APPROVE":    17,
		"ACTION_VIEW_HISTORY":       18,
		"ACTION_VIEW_HIDDEN_TXS":    19,
		"ACTION_HIDE_TX":            20,
		"ACTION_UNHIDE_TX":          21,
		"ACTION_HIDE_MSP_TX":        22,
		"ACTION_UNHIDE_MSP_TX":      23,
		"ACTION_VIEW_MSP_HIDDEN_TX": 24,
	}
)

func (x Action) Enum() *Action {
	p := new(Action)
	*p = x
	return p
}

func (x Action) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Action) Descriptor() protoreflect.EnumDescriptor {
	return file_saacs_common_v0_enums_proto_enumTypes[2].Descriptor()
}

func (Action) Type() protoreflect.EnumType {
	return &file_saacs_common_v0_enums_proto_enumTypes[2]
}

func (x Action) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Action.Descriptor instead.
func (Action) EnumDescriptor() ([]byte, []int) {
	return file_saacs_common_v0_enums_proto_rawDescGZIP(), []int{2}
}

var File_saacs_common_v0_enums_proto protoreflect.FileDescriptor

var file_saacs_common_v0_enums_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76,
	0x30, 0x2f, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x73,
	0x61, 0x61, 0x63, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x30, 0x2a, 0x6c,
	0x0a, 0x0f, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70,
	0x65, 0x12, 0x20, 0x0a, 0x1c, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e,
	0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45,
	0x44, 0x10, 0x00, 0x12, 0x1b, 0x0a, 0x17, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49,
	0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x49, 0x4e, 0x56, 0x4f, 0x4b, 0x45, 0x10, 0x01,
	0x12, 0x1a, 0x0a, 0x16, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f,
	0x54, 0x59, 0x50, 0x45, 0x5f, 0x51, 0x55, 0x45, 0x52, 0x59, 0x10, 0x02, 0x2a, 0x72, 0x0a, 0x08,
	0x49, 0x74, 0x65, 0x6d, 0x4b, 0x69, 0x6e, 0x64, 0x12, 0x19, 0x0a, 0x15, 0x49, 0x54, 0x45, 0x4d,
	0x5f, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45,
	0x44, 0x10, 0x00, 0x12, 0x1a, 0x0a, 0x16, 0x49, 0x54, 0x45, 0x4d, 0x5f, 0x4b, 0x49, 0x4e, 0x44,
	0x5f, 0x50, 0x52, 0x49, 0x4d, 0x41, 0x52, 0x59, 0x5f, 0x49, 0x54, 0x45, 0x4d, 0x10, 0x02, 0x12,
	0x16, 0x0a, 0x12, 0x49, 0x54, 0x45, 0x4d, 0x5f, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x53, 0x55, 0x42,
	0x5f, 0x49, 0x54, 0x45, 0x4d, 0x10, 0x03, 0x12, 0x17, 0x0a, 0x13, 0x49, 0x54, 0x45, 0x4d, 0x5f,
	0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x52, 0x45, 0x46, 0x45, 0x52, 0x45, 0x4e, 0x43, 0x45, 0x10, 0x04,
	0x2a, 0x99, 0x03, 0x0a, 0x06, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x12, 0x41,
	0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45,
	0x44, 0x10, 0x00, 0x12, 0x12, 0x0a, 0x0e, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x55, 0x54,
	0x49, 0x4c, 0x49, 0x54, 0x59, 0x10, 0x01, 0x12, 0x0f, 0x0a, 0x0b, 0x41, 0x43, 0x54, 0x49, 0x4f,
	0x4e, 0x5f, 0x56, 0x49, 0x45, 0x57, 0x10, 0x0a, 0x12, 0x11, 0x0a, 0x0d, 0x41, 0x43, 0x54, 0x49,
	0x4f, 0x4e, 0x5f, 0x43, 0x52, 0x45, 0x41, 0x54, 0x45, 0x10, 0x0b, 0x12, 0x11, 0x0a, 0x0d, 0x41,
	0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x55, 0x50, 0x44, 0x41, 0x54, 0x45, 0x10, 0x0c, 0x12, 0x11,
	0x0a, 0x0d, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x44, 0x45, 0x4c, 0x45, 0x54, 0x45, 0x10,
	0x0d, 0x12, 0x17, 0x0a, 0x13, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x55, 0x47, 0x47,
	0x45, 0x53, 0x54, 0x5f, 0x56, 0x49, 0x45, 0x57, 0x10, 0x0e, 0x12, 0x19, 0x0a, 0x15, 0x41, 0x43,
	0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x55, 0x47, 0x47, 0x45, 0x53, 0x54, 0x5f, 0x43, 0x52, 0x45,
	0x41, 0x54, 0x45, 0x10, 0x0f, 0x12, 0x19, 0x0a, 0x15, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f,
	0x53, 0x55, 0x47, 0x47, 0x45, 0x53, 0x54, 0x5f, 0x44, 0x45, 0x4c, 0x45, 0x54, 0x45, 0x10, 0x10,
	0x12, 0x1a, 0x0a, 0x16, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x55, 0x47, 0x47, 0x45,
	0x53, 0x54, 0x5f, 0x41, 0x50, 0x50, 0x52, 0x4f, 0x56, 0x45, 0x10, 0x11, 0x12, 0x17, 0x0a, 0x13,
	0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x56, 0x49, 0x45, 0x57, 0x5f, 0x48, 0x49, 0x53, 0x54,
	0x4f, 0x52, 0x59, 0x10, 0x12, 0x12, 0x1a, 0x0a, 0x16, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f,
	0x56, 0x49, 0x45, 0x57, 0x5f, 0x48, 0x49, 0x44, 0x44, 0x45, 0x4e, 0x5f, 0x54, 0x58, 0x53, 0x10,
	0x13, 0x12, 0x12, 0x0a, 0x0e, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x48, 0x49, 0x44, 0x45,
	0x5f, 0x54, 0x58, 0x10, 0x14, 0x12, 0x14, 0x0a, 0x10, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f,
	0x55, 0x4e, 0x48, 0x49, 0x44, 0x45, 0x5f, 0x54, 0x58, 0x10, 0x15, 0x12, 0x16, 0x0a, 0x12, 0x41,
	0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x48, 0x49, 0x44, 0x45, 0x5f, 0x4d, 0x53, 0x50, 0x5f, 0x54,
	0x58, 0x10, 0x16, 0x12, 0x18, 0x0a, 0x14, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x55, 0x4e,
	0x48, 0x49, 0x44, 0x45, 0x5f, 0x4d, 0x53, 0x50, 0x5f, 0x54, 0x58, 0x10, 0x17, 0x12, 0x1d, 0x0a,
	0x19, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x56, 0x49, 0x45, 0x57, 0x5f, 0x4d, 0x53, 0x50,
	0x5f, 0x48, 0x49, 0x44, 0x44, 0x45, 0x4e, 0x5f, 0x54, 0x58, 0x10, 0x18, 0x42, 0xb9, 0x01, 0x0a,
	0x13, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x76, 0x30, 0x42, 0x0a, 0x45, 0x6e, 0x75, 0x6d, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6e,
	0x6f, 0x76, 0x61, 0x33, 0x38, 0x2f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x70, 0x6b, 0x67, 0x2f,
	0x73, 0x61, 0x61, 0x63, 0x73, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x73, 0x61, 0x61,
	0x63, 0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x30, 0xa2, 0x02, 0x03, 0x53,
	0x43, 0x56, 0xaa, 0x02, 0x0f, 0x53, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x56, 0x30, 0xca, 0x02, 0x0f, 0x53, 0x61, 0x61, 0x63, 0x73, 0x5c, 0x43, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x5c, 0x56, 0x30, 0xe2, 0x02, 0x1b, 0x53, 0x61, 0x61, 0x63, 0x73, 0x5c, 0x43,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5c, 0x56, 0x30, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x11, 0x53, 0x61, 0x61, 0x63, 0x73, 0x3a, 0x3a, 0x43, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x3a, 0x3a, 0x56, 0x30, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_saacs_common_v0_enums_proto_rawDescOnce sync.Once
	file_saacs_common_v0_enums_proto_rawDescData = file_saacs_common_v0_enums_proto_rawDesc
)

func file_saacs_common_v0_enums_proto_rawDescGZIP() []byte {
	file_saacs_common_v0_enums_proto_rawDescOnce.Do(func() {
		file_saacs_common_v0_enums_proto_rawDescData = protoimpl.X.CompressGZIP(file_saacs_common_v0_enums_proto_rawDescData)
	})
	return file_saacs_common_v0_enums_proto_rawDescData
}

var file_saacs_common_v0_enums_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_saacs_common_v0_enums_proto_goTypes = []interface{}{
	(TransactionType)(0), // 0: saacs.common.v0.TransactionType
	(ItemKind)(0),        // 1: saacs.common.v0.ItemKind
	(Action)(0),          // 2: saacs.common.v0.Action
}
var file_saacs_common_v0_enums_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_saacs_common_v0_enums_proto_init() }
func file_saacs_common_v0_enums_proto_init() {
	if File_saacs_common_v0_enums_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_saacs_common_v0_enums_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_saacs_common_v0_enums_proto_goTypes,
		DependencyIndexes: file_saacs_common_v0_enums_proto_depIdxs,
		EnumInfos:         file_saacs_common_v0_enums_proto_enumTypes,
	}.Build()
	File_saacs_common_v0_enums_proto = out.File
	file_saacs_common_v0_enums_proto_rawDesc = nil
	file_saacs_common_v0_enums_proto_goTypes = nil
	file_saacs_common_v0_enums_proto_depIdxs = nil
}