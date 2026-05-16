export const tagActions = [
  "DescribeReportCreation",
  "GetComplianceSummary",
  "GetResources",
  "GetTagKeys",
  "GetTagValues",
  "ListRequiredTags",
  "StartReportCreation",
  "TagResources",
  "UntagResources",
] as const;

export type TagAction = (typeof tagActions)[number];

export function tag(action: TagAction | "*"): `tag:${TagAction | "*"}` {
  return `tag:${action}` as `tag:${TagAction | "*"}`;
}
