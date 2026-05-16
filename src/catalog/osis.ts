export const osisActions = [
  "CreatePipeline",
  "CreatePipelineEndpoint",
  "DeletePipeline",
  "DeletePipelineEndpoint",
  "DeleteResourcePolicy",
  "GetPipeline",
  "GetPipelineBlueprint",
  "GetPipelineChangeProgress",
  "GetResourcePolicy",
  "Ingest",
  "ListPipelineBlueprints",
  "ListPipelineEndpointConnections",
  "ListPipelineEndpoints",
  "ListPipelines",
  "ListTagsForResource",
  "PutResourcePolicy",
  "RevokePipelineEndpointConnections",
  "StartPipeline",
  "StopPipeline",
  "TagResource",
  "UntagResource",
  "UpdatePipeline",
  "ValidatePipeline",
] as const;

export type OsisAction = (typeof osisActions)[number];

export function osis(action: OsisAction | "*"): `osis:${OsisAction | "*"}` {
  return `osis:${action}` as `osis:${OsisAction | "*"}`;
}
