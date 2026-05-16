export const elastictranscoderActions = [
  "CancelJob",
  "CreateJob",
  "CreatePipeline",
  "CreatePreset",
  "DeletePipeline",
  "DeletePreset",
  "ListJobsByPipeline",
  "ListJobsByStatus",
  "ListPipelines",
  "ListPresets",
  "ReadJob",
  "ReadPipeline",
  "ReadPreset",
  "TestRole",
  "UpdatePipeline",
  "UpdatePipelineNotifications",
  "UpdatePipelineStatus",
] as const;

export type ElastictranscoderAction = (typeof elastictranscoderActions)[number];

export function elastictranscoder(action: ElastictranscoderAction | "*"): `elastictranscoder:${ElastictranscoderAction | "*"}` {
  return `elastictranscoder:${action}` as `elastictranscoder:${ElastictranscoderAction | "*"}`;
}
