export const iqPermissionActions = [
  "ApproveAccessGrant",
  "ApprovePermissionRequest",
  "AssumePermissionRole",
  "CreatePermissionRequest",
  "GetPermissionRequest",
  "ListPermissionRequests",
  "RejectPermissionRequest",
  "RevokePermissionRequest",
  "WithdrawPermissionRequest",
] as const;

export type IqPermissionAction = (typeof iqPermissionActions)[number];

export function iqPermission(action: IqPermissionAction | "*"): `iq-permission:${IqPermissionAction | "*"}` {
  return `iq-permission:${action}` as `iq-permission:${IqPermissionAction | "*"}`;
}
