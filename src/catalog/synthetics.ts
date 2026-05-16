export const syntheticsActions = [
  "AssociateResource",
  "CreateCanary",
  "CreateGroup",
  "DeleteCanary",
  "DeleteGroup",
  "DescribeCanaries",
  "DescribeCanariesLastRun",
  "DescribeRuntimeVersions",
  "DisassociateResource",
  "GetCanary",
  "GetCanaryRuns",
  "GetGroup",
  "ListAssociatedGroups",
  "ListGroupResources",
  "ListGroups",
  "ListTagsForResource",
  "StartCanary",
  "StartCanaryDryRun",
  "StopCanary",
  "TagResource",
  "UntagResource",
  "UpdateCanary",
] as const;

export type SyntheticsAction = (typeof syntheticsActions)[number];

export function synthetics(action: SyntheticsAction | "*"): `synthetics:${SyntheticsAction | "*"}` {
  return `synthetics:${action}` as `synthetics:${SyntheticsAction | "*"}`;
}
