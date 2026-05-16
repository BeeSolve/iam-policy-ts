export const datapipelineActions = [
  "ActivatePipeline",
  "AddTags",
  "CreatePipeline",
  "DeactivatePipeline",
  "DeletePipeline",
  "DescribeObjects",
  "DescribePipelines",
  "EvaluateExpression",
  "GetAccountLimits",
  "GetPipelineDefinition",
  "ListPipelines",
  "PollForTask",
  "PutAccountLimits",
  "PutPipelineDefinition",
  "QueryObjects",
  "RemoveTags",
  "ReportTaskProgress",
  "ReportTaskRunnerHeartbeat",
  "SetStatus",
  "SetTaskStatus",
  "ValidatePipelineDefinition",
] as const;

export type DatapipelineAction = (typeof datapipelineActions)[number];

export function datapipeline(action: DatapipelineAction | "*"): `datapipeline:${DatapipelineAction | "*"}` {
  return `datapipeline:${action}` as `datapipeline:${DatapipelineAction | "*"}`;
}
