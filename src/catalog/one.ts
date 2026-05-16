export const oneActions = [
  "CreateDeviceActivationQrCode",
  "CreateDeviceConfigurationTemplate",
  "CreateDeviceInstance",
  "CreateDeviceInstanceConfiguration",
  "CreateSite",
  "DeleteAssociatedDevice",
  "DeleteDeviceConfigurationTemplate",
  "DeleteDeviceInstance",
  "DeleteSite",
  "DeleteUserV1",
  "GetDeviceConfigurationTemplate",
  "GetDeviceInstance",
  "GetDeviceInstanceConfiguration",
  "GetSite",
  "GetSiteAddress",
  "ListDeviceConfigurationTemplates",
  "ListDeviceInstances",
  "ListSites",
  "ListTagsForResource",
  "ListUsers",
  "ListUsersV1",
  "RebootDevice",
  "TagResource",
  "UntagResource",
  "UpdateDeviceConfigurationTemplate",
  "UpdateDeviceInstance",
  "UpdateSite",
  "UpdateSiteAddress",
] as const;

export type OneAction = (typeof oneActions)[number];

export function one(action: OneAction | "*"): `one:${OneAction | "*"}` {
  return `one:${action}` as `one:${OneAction | "*"}`;
}
