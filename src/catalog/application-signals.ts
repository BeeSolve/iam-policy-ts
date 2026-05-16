export const applicationSignalsActions = [
  "BatchGetServiceLevelObjectiveBudgetReport",
  "BatchUpdateExclusionWindows",
  "CreateServiceLevelObjective",
  "DeleteGroupingConfiguration",
  "DeleteServiceLevelObjective",
  "GetService",
  "GetServiceLevelObjective",
  "Link",
  "ListAuditFindings",
  "ListEntityEvents",
  "ListGroupingAttributeDefinitions",
  "ListObservedEntities",
  "ListServiceDependencies",
  "ListServiceDependents",
  "ListServiceLevelObjectiveExclusionWindows",
  "ListServiceLevelObjectives",
  "ListServiceOperations",
  "ListServices",
  "ListServiceStates",
  "ListTagsForResource",
  "PutGroupingConfiguration",
  "StartDiscovery",
  "TagResource",
  "UntagResource",
  "UpdateServiceLevelObjective",
] as const;

export type ApplicationSignalsAction = (typeof applicationSignalsActions)[number];

export function applicationSignals(action: ApplicationSignalsAction | "*"): `application-signals:${ApplicationSignalsAction | "*"}` {
  return `application-signals:${action}` as `application-signals:${ApplicationSignalsAction | "*"}`;
}
