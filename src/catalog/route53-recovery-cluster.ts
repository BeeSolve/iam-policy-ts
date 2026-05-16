export const route53RecoveryClusterActions = [
  "GetRoutingControlState",
  "ListRoutingControls",
  "UpdateRoutingControlState",
  "UpdateRoutingControlStates",
] as const;

export type Route53RecoveryClusterAction = (typeof route53RecoveryClusterActions)[number];

export function route53RecoveryCluster(action: Route53RecoveryClusterAction | "*"): `route53-recovery-cluster:${Route53RecoveryClusterAction | "*"}` {
  return `route53-recovery-cluster:${action}` as `route53-recovery-cluster:${Route53RecoveryClusterAction | "*"}`;
}
