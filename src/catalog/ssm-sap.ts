export const ssmSapActions = [
  "BackupDatabase",
  "DeleteResourcePermission",
  "DeregisterApplication",
  "GetApplication",
  "GetComponent",
  "GetConfigurationCheckOperation",
  "GetDatabase",
  "GetOperation",
  "GetResourcePermission",
  "ListApplications",
  "ListComponents",
  "ListConfigurationCheckDefinitions",
  "ListConfigurationCheckOperations",
  "ListDatabases",
  "ListOperationEvents",
  "ListOperations",
  "ListSubCheckResults",
  "ListSubCheckRuleResults",
  "ListTagsForResource",
  "PutResourcePermission",
  "RegisterApplication",
  "RestoreDatabase",
  "StartApplication",
  "StartApplicationRefresh",
  "StartConfigurationChecks",
  "StopApplication",
  "TagResource",
  "UntagResource",
  "UpdateApplicationSettings",
  "UpdateHANABackupSettings",
] as const;

export type SsmSapAction = (typeof ssmSapActions)[number];

export function ssmSap(action: SsmSapAction | "*"): `ssm-sap:${SsmSapAction | "*"}` {
  return `ssm-sap:${action}` as `ssm-sap:${SsmSapAction | "*"}`;
}
