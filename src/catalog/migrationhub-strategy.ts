export const migrationhubStrategyActions = [
  "GetAntiPattern",
  "GetApplicationComponentDetails",
  "GetApplicationComponentStrategies",
  "GetAssessment",
  "GetImportFileTask",
  "GetLatestAssessmentId",
  "GetMessage",
  "GetPortfolioPreferences",
  "GetPortfolioSummary",
  "GetRecommendationReportDetails",
  "GetServerDetails",
  "GetServerStrategies",
  "ListAnalyzableServers",
  "ListAntiPatterns",
  "ListApplicationComponents",
  "ListCollectors",
  "ListImportFileTask",
  "ListJarArtifacts",
  "ListServers",
  "PutLogData",
  "PutMetricData",
  "PutPortfolioPreferences",
  "RegisterCollector",
  "SendMessage",
  "StartAssessment",
  "StartImportFileTask",
  "StartRecommendationReportGeneration",
  "StopAssessment",
  "UpdateApplicationComponentConfig",
  "UpdateCollectorConfiguration",
  "UpdateServerConfig",
] as const;

export type MigrationhubStrategyAction = (typeof migrationhubStrategyActions)[number];

export function migrationhubStrategy(action: MigrationhubStrategyAction | "*"): `migrationhub-strategy:${MigrationhubStrategyAction | "*"}` {
  return `migrationhub-strategy:${action}` as `migrationhub-strategy:${MigrationhubStrategyAction | "*"}`;
}
