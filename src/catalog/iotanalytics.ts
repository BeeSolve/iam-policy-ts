export const iotanalyticsActions = [
  "BatchPutMessage",
  "CancelPipelineReprocessing",
  "CreateChannel",
  "CreateDataset",
  "CreateDatasetContent",
  "CreateDatastore",
  "CreatePipeline",
  "DeleteChannel",
  "DeleteDataset",
  "DeleteDatasetContent",
  "DeleteDatastore",
  "DeletePipeline",
  "DescribeChannel",
  "DescribeDataset",
  "DescribeDatastore",
  "DescribeLoggingOptions",
  "DescribePipeline",
  "GetDatasetContent",
  "ListChannels",
  "ListDatasetContents",
  "ListDatasets",
  "ListDatastores",
  "ListPipelines",
  "ListTagsForResource",
  "PutLoggingOptions",
  "RunPipelineActivity",
  "SampleChannelData",
  "StartPipelineReprocessing",
  "TagResource",
  "UntagResource",
  "UpdateChannel",
  "UpdateDataset",
  "UpdateDatastore",
  "UpdatePipeline",
] as const;

export type IotanalyticsAction = (typeof iotanalyticsActions)[number];

export function iotanalytics(action: IotanalyticsAction | "*"): `iotanalytics:${IotanalyticsAction | "*"}` {
  return `iotanalytics:${action}` as `iotanalytics:${IotanalyticsAction | "*"}`;
}
