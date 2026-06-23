export const applicationSignalsActions = [
  "BatchDeleteInstrumentationConfigurations",
  "BatchGetServiceLevelObjectiveBudgetReport",
  "BatchUpdateExclusionWindows",
  "CreateInstrumentationConfiguration",
  "CreateServiceLevelObjective",
  "DeleteGroupingConfiguration",
  "DeleteInstrumentationConfiguration",
  "DeleteServiceLevelObjective",
  "GetInstrumentationConfiguration",
  "GetInstrumentationConfigurationStatus",
  "GetService",
  "GetServiceLevelObjective",
  "Link",
  "ListAuditFindings",
  "ListEntityEvents",
  "ListGroupingAttributeDefinitions",
  "ListInstrumentationConfigurations",
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
  "ReportInstrumentationConfigurationStatus",
  "StartDiscovery",
  "TagResource",
  "UntagResource",
  "UpdateServiceLevelObjective",
] as const;

export type ApplicationSignalsAction = (typeof applicationSignalsActions)[number];

export function applicationSignals(action: ApplicationSignalsAction | "*"): `application-signals:${ApplicationSignalsAction | "*"}` {
  return `application-signals:${action}` as `application-signals:${ApplicationSignalsAction | "*"}`;
}
