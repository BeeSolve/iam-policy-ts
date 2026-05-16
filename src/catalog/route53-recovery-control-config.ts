export const route53RecoveryControlConfigActions = [
  "CreateCluster",
  "CreateControlPanel",
  "CreateRoutingControl",
  "CreateSafetyRule",
  "DeleteCluster",
  "DeleteControlPanel",
  "DeleteResourcePolicy",
  "DeleteRoutingControl",
  "DeleteSafetyRule",
  "DescribeCluster",
  "DescribeControlPanel",
  "DescribeRoutingControl",
  "DescribeSafetyRule",
  "GetResourcePolicy",
  "ListAssociatedRoute53HealthChecks",
  "ListClusters",
  "ListControlPanels",
  "ListRoutingControls",
  "ListSafetyRules",
  "ListTagsForResource",
  "PutResourcePolicy",
  "TagResource",
  "UntagResource",
  "UpdateCluster",
  "UpdateControlPanel",
  "UpdateRoutingControl",
  "UpdateSafetyRule",
] as const;

export type Route53RecoveryControlConfigAction = (typeof route53RecoveryControlConfigActions)[number];

export function route53RecoveryControlConfig(action: Route53RecoveryControlConfigAction | "*"): `route53-recovery-control-config:${Route53RecoveryControlConfigAction | "*"}` {
  return `route53-recovery-control-config:${action}` as `route53-recovery-control-config:${Route53RecoveryControlConfigAction | "*"}`;
}
