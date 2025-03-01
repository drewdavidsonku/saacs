// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file saacs/auth/v0/type.proto (package saacs.auth.v0, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MessageOptions, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum saacs.auth.v0.AuthType
 */
export enum AuthType {
  /**
   * Invalid authentication type/Non Specified
   *
   * @generated from enum value: AUTH_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * No authentication, all users have access to all collections actions
   *
   * @generated from enum value: AUTH_TYPE_NONE = 1;
   */
  NONE = 1,

  /**
   * Identity-based authentication, Identities are stored per user per collection
   *
   * @generated from enum value: AUTH_TYPE_IDENTITY = 2;
   */
  IDENTITY = 2,

  /**
   * Role-based authentication, Roles are stored per user per collection
   *
   * @generated from enum value: AUTH_TYPE_ROLE = 3;
   */
  ROLE = 3,

  /**
   * Global role-based authentication, Roles are stored per user
   *
   * @generated from enum value: AUTH_TYPE_GLOBAL_ROLE = 4;
   */
  GLOBAL_ROLE = 4,

  /**
   * Attribute-based authentication, Attributes are stored per msp per collection
   *
   * @generated from enum value: AUTH_TYPE_ATTRIBUTE = 5;
   */
  ATTRIBUTE = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(AuthType)
proto3.util.setEnumType(AuthType, "saacs.auth.v0.AuthType", [
  { no: 0, name: "AUTH_TYPE_UNSPECIFIED" },
  { no: 1, name: "AUTH_TYPE_NONE" },
  { no: 2, name: "AUTH_TYPE_IDENTITY" },
  { no: 3, name: "AUTH_TYPE_ROLE" },
  { no: 4, name: "AUTH_TYPE_GLOBAL_ROLE" },
  { no: 5, name: "AUTH_TYPE_ATTRIBUTE" },
]);

/**
 * @generated from extension: saacs.auth.v0.AuthType auth_type = 55888;
 */
export const auth_type = proto3.makeExtension<MessageOptions, AuthType>(
  "saacs.auth.v0.auth_type", 
  MessageOptions, 
  () => ({ no: 55888, kind: "enum", T: proto3.getEnumType(AuthType) }),
);

