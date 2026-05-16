export const ssmQuicksetupActions = [
  "CreateConfigurationManager",
  "DeleteConfigurationManager",
  "GetConfiguration",
  "GetConfigurationManager",
  "GetServiceSettings",
  "ListConfigurationManagers",
  "ListConfigurations",
  "ListQuickSetupTypes",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateConfigurationDefinition",
  "UpdateConfigurationManager",
  "UpdateServiceSettings",
] as const;

export type SsmQuicksetupAction = (typeof ssmQuicksetupActions)[number];

export function ssmQuicksetup(action: SsmQuicksetupAction | "*"): `ssm-quicksetup:${SsmQuicksetupAction | "*"}` {
  return `ssm-quicksetup:${action}` as `ssm-quicksetup:${SsmQuicksetupAction | "*"}`;
}
