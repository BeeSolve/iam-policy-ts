export const codeguruSecurityActions = [
  "BatchGetFindings",
  "CreateScan",
  "CreateUploadUrl",
  "DeleteScansByCategory",
  "GetAccountConfiguration",
  "GetFindings",
  "GetMetricsSummary",
  "GetScan",
  "ListFindings",
  "ListFindingsMetrics",
  "ListScans",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateAccountConfiguration",
] as const;

export type CodeguruSecurityAction = (typeof codeguruSecurityActions)[number];

export function codeguruSecurity(action: CodeguruSecurityAction | "*"): `codeguru-security:${CodeguruSecurityAction | "*"}` {
  return `codeguru-security:${action}` as `codeguru-security:${CodeguruSecurityAction | "*"}`;
}
