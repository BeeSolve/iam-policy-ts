export const discoveryActions = [
  "AssociateConfigurationItemsToApplication",
  "BatchDeleteAgents",
  "BatchDeleteImportData",
  "CreateApplication",
  "CreateTags",
  "DeleteApplications",
  "DeleteTags",
  "DescribeAgents",
  "DescribeBatchDeleteConfigurationTask",
  "DescribeConfigurations",
  "DescribeContinuousExports",
  "DescribeExportConfigurations",
  "DescribeExportTasks",
  "DescribeImportTasks",
  "DescribeTags",
  "DisassociateConfigurationItemsFromApplication",
  "ExportConfigurations",
  "GetDiscoverySummary",
  "GetNetworkConnectionGraph",
  "ListConfigurations",
  "ListServerNeighbors",
  "StartBatchDeleteConfigurationTask",
  "StartContinuousExport",
  "StartDataCollectionByAgentIds",
  "StartExportTask",
  "StartImportTask",
  "StopContinuousExport",
  "StopDataCollectionByAgentIds",
  "UpdateApplication",
] as const;

export type DiscoveryAction = (typeof discoveryActions)[number];

export function discovery(action: DiscoveryAction | "*"): `discovery:${DiscoveryAction | "*"}` {
  return `discovery:${action}` as `discovery:${DiscoveryAction | "*"}`;
}
