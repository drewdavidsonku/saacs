package policy

import (
	authpb "github.com/nova38/thesis/lib/go/gen/auth/v1"
	"google.golang.org/protobuf/types/known/fieldmaskpb"
)

var Policies = map[string]authpb.Operation{
	"Create Collection": {
		Action:              authpb.Action_ACTION_CREATE,
		CollectionId:        "collection_id",
		ObjectType:          "auth.Collection",
		SecondaryObjectType: "",
		Paths:               &fieldmaskpb.FieldMask{},
	},
	"Register User": {
		Action:              authpb.Action_ACTION_CREATE,
		CollectionId:        "GLOBAL",
		ObjectType:          "auth.User",
		SecondaryObjectType: "",
		Paths:               &fieldmaskpb.FieldMask{},
	},
	"Register Attribute": {
		Action:              authpb.Action_ACTION_CREATE,
		CollectionId:        "collection_id",
		ObjectType:          "auth.Attribute",
		SecondaryObjectType: "",
		Paths:               &fieldmaskpb.FieldMask{},
	},
	"Register Role": {
		Action:              authpb.Action_ACTION_CREATE,
		CollectionId:        "collection_id",
		ObjectType:          "auth.Role",
		SecondaryObjectType: "",
		Paths:               &fieldmaskpb.FieldMask{},
	},
	"Edit Role Permissions": {
		Action:              authpb.Action_ACTION_UPDATE,
		CollectionId:        "collection_id",
		ObjectType:          "auth.Role",
		SecondaryObjectType: "",
		Paths: &fieldmaskpb.FieldMask{
			Paths: []string{"ac"},
		},
	},
	"Edit User Membership": {
		Action:              authpb.Action_ACTION_UPDATE,
		CollectionId:        "collection_id",
		ObjectType:          "auth.User",
		SecondaryObjectType: "auth.Role",
		Paths:               &fieldmaskpb.FieldMask{},
	},
}
