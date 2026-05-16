export const honeycodeActions = [
  "ApproveTeamAssociation",
  "BatchCreateTableRows",
  "BatchDeleteTableRows",
  "BatchUpdateTableRows",
  "BatchUpsertTableRows",
  "CreateTeam",
  "CreateTenant",
  "DeleteDomains",
  "DeregisterGroups",
  "DescribeTableDataImportJob",
  "DescribeTeam",
  "GetScreenData",
  "InvokeScreenAutomation",
  "ListDomains",
  "ListGroups",
  "ListTableColumns",
  "ListTableRows",
  "ListTables",
  "ListTagsForResource",
  "ListTeamAssociations",
  "ListTenants",
  "QueryTableRows",
  "RegisterDomainForVerification",
  "RegisterGroups",
  "RejectTeamAssociation",
  "RestartDomainVerification",
  "StartTableDataImportJob",
  "TagResource",
  "UntagResource",
  "UpdateTeam",
] as const;

export type HoneycodeAction = (typeof honeycodeActions)[number];

export function honeycode(action: HoneycodeAction | "*"): `honeycode:${HoneycodeAction | "*"}` {
  return `honeycode:${action}` as `honeycode:${HoneycodeAction | "*"}`;
}
