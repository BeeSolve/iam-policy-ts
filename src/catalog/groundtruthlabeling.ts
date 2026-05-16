export const groundtruthlabelingActions = [
  "AssociatePatchToManifestJob",
  "CreateBatch",
  "CreateIntakeForm",
  "CreateProject",
  "CreateWorkflowDefinition",
  "DescribeConsoleJob",
  "GenerateLIDARPreviewTaskConfigJob",
  "GetBatch",
  "GetIntakeFormStatus",
  "ListBatches",
  "ListDatasetObjects",
  "ListProjects",
  "RunFilterOrSampleDatasetJob",
  "RunGenerateManifestByCrawlingJob",
  "RunGenerateManifestMetricsJob",
  "UpdateBatch",
] as const;

export type GroundtruthlabelingAction = (typeof groundtruthlabelingActions)[number];

export function groundtruthlabeling(action: GroundtruthlabelingAction | "*"): `groundtruthlabeling:${GroundtruthlabelingAction | "*"}` {
  return `groundtruthlabeling:${action}` as `groundtruthlabeling:${GroundtruthlabelingAction | "*"}`;
}
