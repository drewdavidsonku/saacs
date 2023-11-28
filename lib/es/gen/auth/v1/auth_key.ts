// @generated by protoc-gen-reg v1 with parameter "target=ts"
// @generated from file auth/v1/auth.proto (package auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Message } from "@bufbuild/protobuf";
import { Attribute, Role, UserCollectionRoles, UserMembership } from "./auth_pb.js";

// KeySchema 

// Message
// StateActivity 

// Message
// Operation 

// Message
// PathPolicy 

// Message
// Polices 

// Message
// Item 

// Message
// FullItem 

// Message
// HistoryEntry 

// Message
// History 

// Message
// ItemKey 

// Message
// ReferenceKey 

// Message
// Reference 

// Message
// Collection 

// Message
// User 

// Message
// Suggestion 

// Message
// HiddenTx 

// Message
// HiddenTxList 

// Message
// Role 

// Message
// Primary Item:  Role

// namecollection_id field }
// namerole_id field }
// namepolices field }
// namedescription field }
// nameparent_role_ids field }
    // role_id   ,
export function RoleKey(item : Role): string[] {
    attr=[]
 if (!item?.roleId) {
    return attr
 }
    attr.push(item?.roleId)
 return attr
}
// Path: role_id

// Attribute 

// Message
// Primary Item:  Attribute

// namecollection_id field }
// namemsp_id field }
// nameoid field }
// namevalue field }
// namepolices field }
    // msp_id   ,
    // oid   ,
    // role_id   ,
export function AttributeKey(item : Attribute): string[] {
    attr=[]
 if (!item?.mspId) {
    return attr
 }
    attr.push(item?.mspId)
 if (!item?.oid) {
    return attr
 }
    attr.push(item?.oid)
 return attr
}
// Path: msp_id

// Path: oid

// Path: role_id

// UserMembership 

// Message
// Primary Item:  UserMembership

// namecollection_id field }
// namemsp_id field }
// nameuser_id field }
// namepolices field }
    // msp_id   ,
    // user_id   ,
export function UserMembershipKey(item : UserMembership): string[] {
    attr=[]
 if (!item?.mspId) {
    return attr
 }
    attr.push(item?.mspId)
 if (!item?.userId) {
    return attr
 }
    attr.push(item?.userId)
 return attr
}
// Path: msp_id

// Path: user_id

// UserCollectionRoles 

// Message
// Primary Item:  UserCollectionRoles

// namecollection_id field }
// namemsp_id field }
// nameuser_id field }
// namerole_ids field }
    // msp_id   ,
    // user_id   ,
export function UserCollectionRolesKey(item : UserCollectionRoles): string[] {
    attr=[]
 if (!item?.mspId) {
    return attr
 }
    attr.push(item?.mspId)
 if (!item?.userId) {
    return attr
 }
    attr.push(item?.userId)
 return attr
}
// Path: msp_id

// Path: user_id

