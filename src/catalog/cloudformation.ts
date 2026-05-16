export const cloudformationActions = [
  "CancelResourceRequest",
  "CreateResource",
  "DeleteResource",
  "GetResource",
  "GetResourceRequestStatus",
  "ListResourceRequests",
  "ListResources",
  "UpdateResource",
] as const;

export type CloudformationAction = (typeof cloudformationActions)[number];

export function cloudformation(action: CloudformationAction | "*"): `cloudformation:${CloudformationAction | "*"}` {
  return `cloudformation:${action}` as `cloudformation:${CloudformationAction | "*"}`;
}
