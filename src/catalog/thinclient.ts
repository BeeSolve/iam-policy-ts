export const thinclientActions = [
  "CreateEnvironment",
  "DeleteDevice",
  "DeleteEnvironment",
  "DeregisterDevice",
  "GetDevice",
  "GetDeviceDetails",
  "GetEnvironment",
  "GetSoftwareSet",
  "ListDevices",
  "ListDeviceSessions",
  "ListEnvironments",
  "ListSoftwareSets",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateDevice",
  "UpdateEnvironment",
  "UpdateSoftwareSet",
] as const;

export type ThinclientAction = (typeof thinclientActions)[number];

export function thinclient(action: ThinclientAction | "*"): `thinclient:${ThinclientAction | "*"}` {
  return `thinclient:${action}` as `thinclient:${ThinclientAction | "*"}`;
}
