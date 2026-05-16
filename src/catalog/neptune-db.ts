export const neptuneDbActions = [
  "CancelLoaderJob",
  "CancelMLDataProcessingJob",
  "CancelMLModelTrainingJob",
  "CancelMLModelTransformJob",
  "CancelQuery",
  "connect",
  "CreateMLEndpoint",
  "DeleteDataViaQuery",
  "DeleteMLEndpoint",
  "DeleteStatistics",
  "GetEngineStatus",
  "GetGraphSummary",
  "GetLoaderJobStatus",
  "GetMLDataProcessingJobStatus",
  "GetMLEndpointStatus",
  "GetMLModelTrainingJobStatus",
  "GetMLModelTransformJobStatus",
  "GetQueryStatus",
  "GetStatisticsStatus",
  "GetStreamRecords",
  "ListLoaderJobs",
  "ListMLDataProcessingJobs",
  "ListMLEndpoints",
  "ListMLModelTrainingJobs",
  "ListMLModelTransformJobs",
  "ManageStatistics",
  "ReadDataViaQuery",
  "ResetDatabase",
  "StartLoaderJob",
  "StartMLDataProcessingJob",
  "StartMLModelTrainingJob",
  "StartMLModelTransformJob",
  "WriteDataViaQuery",
] as const;

export type NeptuneDbAction = (typeof neptuneDbActions)[number];

export function neptuneDb(action: NeptuneDbAction | "*"): `neptune-db:${NeptuneDbAction | "*"}` {
  return `neptune-db:${action}` as `neptune-db:${NeptuneDbAction | "*"}`;
}
