export const lookoutvisionActions = [
  "CreateDataset",
  "CreateModel",
  "CreateProject",
  "DeleteDataset",
  "DeleteModel",
  "DeleteProject",
  "DescribeDataset",
  "DescribeModel",
  "DescribeModelPackagingJob",
  "DescribeProject",
  "DescribeTrialDetection",
  "DetectAnomalies",
  "ListDatasetEntries",
  "ListModelPackagingJobs",
  "ListModels",
  "ListProjects",
  "ListTagsForResource",
  "ListTrialDetections",
  "StartModel",
  "StartModelPackagingJob",
  "StartTrialDetection",
  "StopModel",
  "TagResource",
  "UntagResource",
  "UpdateDatasetEntries",
] as const;

export type LookoutvisionAction = (typeof lookoutvisionActions)[number];

export function lookoutvision(action: LookoutvisionAction | "*"): `lookoutvision:${LookoutvisionAction | "*"}` {
  return `lookoutvision:${action}` as `lookoutvision:${LookoutvisionAction | "*"}`;
}
