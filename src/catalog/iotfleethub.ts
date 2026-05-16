export const iotfleethubActions = [
  "CreateApplication",
  "DeleteApplication",
  "DescribeApplication",
  "ListApplications",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateApplication",
] as const;

export type IotfleethubAction = (typeof iotfleethubActions)[number];

export function iotfleethub(action: IotfleethubAction | "*"): `iotfleethub:${IotfleethubAction | "*"}` {
  return `iotfleethub:${action}` as `iotfleethub:${IotfleethubAction | "*"}`;
}
