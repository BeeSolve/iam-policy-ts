export const bcmDataHubActions = [
  "CancelQueryExecution",
  "CreateDataset",
  "DeleteDataset",
  "GetDataset",
  "GetDatasetSchema",
  "GetQueryExecution",
  "GetQueryExecutionResults",
  "ListDatasets",
  "ListQueryExecutions",
  "ListTagsForResource",
  "StartQueryExecution",
  "TagResource",
  "UntagResource",
  "UpdateDataset",
] as const;

export type BcmDataHubAction = (typeof bcmDataHubActions)[number];

export function bcmDataHub(action: BcmDataHubAction | "*"): `bcm-data-hub:${BcmDataHubAction | "*"}` {
  return `bcm-data-hub:${action}` as `bcm-data-hub:${BcmDataHubAction | "*"}`;
}
