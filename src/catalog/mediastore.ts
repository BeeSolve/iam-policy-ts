export const mediastoreActions = [
  "CreateContainer",
  "DeleteContainer",
  "DeleteContainerPolicy",
  "DeleteCorsPolicy",
  "DeleteLifecyclePolicy",
  "DeleteMetricPolicy",
  "DeleteObject",
  "DescribeContainer",
  "DescribeObject",
  "GetContainerPolicy",
  "GetCorsPolicy",
  "GetLifecyclePolicy",
  "GetMetricPolicy",
  "GetObject",
  "ListContainers",
  "ListItems",
  "ListTagsForResource",
  "PutContainerPolicy",
  "PutCorsPolicy",
  "PutLifecyclePolicy",
  "PutMetricPolicy",
  "PutObject",
  "StartAccessLogging",
  "StopAccessLogging",
  "TagResource",
  "UntagResource",
] as const;

export type MediastoreAction = (typeof mediastoreActions)[number];

export function mediastore(action: MediastoreAction | "*"): `mediastore:${MediastoreAction | "*"}` {
  return `mediastore:${action}` as `mediastore:${MediastoreAction | "*"}`;
}
