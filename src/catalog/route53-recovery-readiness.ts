export const route53RecoveryReadinessActions = [
  "CreateCell",
  "CreateCrossAccountAuthorization",
  "CreateReadinessCheck",
  "CreateRecoveryGroup",
  "CreateResourceSet",
  "DeleteCell",
  "DeleteCrossAccountAuthorization",
  "DeleteReadinessCheck",
  "DeleteRecoveryGroup",
  "DeleteResourceSet",
  "GetArchitectureRecommendations",
  "GetCell",
  "GetCellReadinessSummary",
  "GetReadinessCheck",
  "GetReadinessCheckResourceStatus",
  "GetReadinessCheckStatus",
  "GetRecoveryGroup",
  "GetRecoveryGroupReadinessSummary",
  "GetResourceSet",
  "ListCells",
  "ListCrossAccountAuthorizations",
  "ListReadinessChecks",
  "ListRecoveryGroups",
  "ListResourceSets",
  "ListRules",
  "ListTagsForResources",
  "TagResource",
  "UntagResource",
  "UpdateCell",
  "UpdateReadinessCheck",
  "UpdateRecoveryGroup",
  "UpdateResourceSet",
] as const;

export type Route53RecoveryReadinessAction = (typeof route53RecoveryReadinessActions)[number];

export function route53RecoveryReadiness(action: Route53RecoveryReadinessAction | "*"): `route53-recovery-readiness:${Route53RecoveryReadinessAction | "*"}` {
  return `route53-recovery-readiness:${action}` as `route53-recovery-readiness:${Route53RecoveryReadinessAction | "*"}`;
}
