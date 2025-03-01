// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: saacs/chaincode/v0/events.proto

package v0

import (
	v0 "github.com/nova38/saacs/pkg/saacs-protos/saacs/common/v0"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type OperationsPerformed struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Operations []*v0.Operation        `protobuf:"bytes,1,rep,name=operations,proto3" json:"operations,omitempty"`
	User       *v0.User               `protobuf:"bytes,2,opt,name=user,proto3" json:"user,omitempty"`
	Timestamp  *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *OperationsPerformed) Reset() {
	*x = OperationsPerformed{}
	if protoimpl.UnsafeEnabled {
		mi := &file_saacs_chaincode_v0_events_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OperationsPerformed) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OperationsPerformed) ProtoMessage() {}

func (x *OperationsPerformed) ProtoReflect() protoreflect.Message {
	mi := &file_saacs_chaincode_v0_events_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OperationsPerformed.ProtoReflect.Descriptor instead.
func (*OperationsPerformed) Descriptor() ([]byte, []int) {
	return file_saacs_chaincode_v0_events_proto_rawDescGZIP(), []int{0}
}

func (x *OperationsPerformed) GetOperations() []*v0.Operation {
	if x != nil {
		return x.Operations
	}
	return nil
}

func (x *OperationsPerformed) GetUser() *v0.User {
	if x != nil {
		return x.User
	}
	return nil
}

func (x *OperationsPerformed) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

var File_saacs_chaincode_v0_events_proto protoreflect.FileDescriptor

var file_saacs_chaincode_v0_events_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x64,
	0x65, 0x2f, 0x76, 0x30, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x12, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x63, 0x6f,
	0x64, 0x65, 0x2e, 0x76, 0x30, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x30, 0x2f, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x30, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0xb6, 0x01, 0x0a, 0x13, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x65, 0x64, 0x12, 0x3a, 0x0a, 0x0a, 0x6f,
	0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76,
	0x30, 0x2e, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x6f, 0x70, 0x65,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x29, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x30, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x04, 0x75, 0x73,
	0x65, 0x72, 0x12, 0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0xcc, 0x01, 0x0a,
	0x16, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e,
	0x63, 0x6f, 0x64, 0x65, 0x2e, 0x76, 0x30, 0x42, 0x0b, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6e, 0x6f, 0x76, 0x61, 0x33, 0x38, 0x2f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f,
	0x70, 0x6b, 0x67, 0x2f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2f, 0x73, 0x61, 0x61, 0x63, 0x73, 0x2f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x64, 0x65,
	0x2f, 0x76, 0x30, 0xa2, 0x02, 0x03, 0x53, 0x43, 0x56, 0xaa, 0x02, 0x12, 0x53, 0x61, 0x61, 0x63,
	0x73, 0x2e, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x2e, 0x56, 0x30, 0xca, 0x02,
	0x12, 0x53, 0x61, 0x61, 0x63, 0x73, 0x5c, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x64, 0x65,
	0x5c, 0x56, 0x30, 0xe2, 0x02, 0x1e, 0x53, 0x61, 0x61, 0x63, 0x73, 0x5c, 0x43, 0x68, 0x61, 0x69,
	0x6e, 0x63, 0x6f, 0x64, 0x65, 0x5c, 0x56, 0x30, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x14, 0x53, 0x61, 0x61, 0x63, 0x73, 0x3a, 0x3a, 0x43, 0x68,
	0x61, 0x69, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x3a, 0x3a, 0x56, 0x30, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_saacs_chaincode_v0_events_proto_rawDescOnce sync.Once
	file_saacs_chaincode_v0_events_proto_rawDescData = file_saacs_chaincode_v0_events_proto_rawDesc
)

func file_saacs_chaincode_v0_events_proto_rawDescGZIP() []byte {
	file_saacs_chaincode_v0_events_proto_rawDescOnce.Do(func() {
		file_saacs_chaincode_v0_events_proto_rawDescData = protoimpl.X.CompressGZIP(file_saacs_chaincode_v0_events_proto_rawDescData)
	})
	return file_saacs_chaincode_v0_events_proto_rawDescData
}

var file_saacs_chaincode_v0_events_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_saacs_chaincode_v0_events_proto_goTypes = []interface{}{
	(*OperationsPerformed)(nil),   // 0: saacs.chaincode.v0.OperationsPerformed
	(*v0.Operation)(nil),          // 1: saacs.common.v0.Operation
	(*v0.User)(nil),               // 2: saacs.common.v0.User
	(*timestamppb.Timestamp)(nil), // 3: google.protobuf.Timestamp
}
var file_saacs_chaincode_v0_events_proto_depIdxs = []int32{
	1, // 0: saacs.chaincode.v0.OperationsPerformed.operations:type_name -> saacs.common.v0.Operation
	2, // 1: saacs.chaincode.v0.OperationsPerformed.user:type_name -> saacs.common.v0.User
	3, // 2: saacs.chaincode.v0.OperationsPerformed.timestamp:type_name -> google.protobuf.Timestamp
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_saacs_chaincode_v0_events_proto_init() }
func file_saacs_chaincode_v0_events_proto_init() {
	if File_saacs_chaincode_v0_events_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_saacs_chaincode_v0_events_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OperationsPerformed); i {
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
			RawDescriptor: file_saacs_chaincode_v0_events_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_saacs_chaincode_v0_events_proto_goTypes,
		DependencyIndexes: file_saacs_chaincode_v0_events_proto_depIdxs,
		MessageInfos:      file_saacs_chaincode_v0_events_proto_msgTypes,
	}.Build()
	File_saacs_chaincode_v0_events_proto = out.File
	file_saacs_chaincode_v0_events_proto_rawDesc = nil
	file_saacs_chaincode_v0_events_proto_goTypes = nil
	file_saacs_chaincode_v0_events_proto_depIdxs = nil
}
