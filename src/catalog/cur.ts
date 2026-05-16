export const curActions = [
  "DeleteReportDefinition",
  "DescribeReportDefinitions",
  "GetClassicReport",
  "GetClassicReportPreferences",
  "GetUsageReport",
  "ListTagsForResource",
  "ModifyReportDefinition",
  "PutClassicReportPreferences",
  "PutReportDefinition",
  "TagResource",
  "UntagResource",
  "ValidateReportDestination",
] as const;

export type CurAction = (typeof curActions)[number];

export function cur(action: CurAction | "*"): `cur:${CurAction | "*"}` {
  return `cur:${action}` as `cur:${CurAction | "*"}`;
}
