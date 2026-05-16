export const mediaconvertActions = [
  "AssociateCertificate",
  "CancelJob",
  "CreateJob",
  "CreateJobTemplate",
  "CreatePreset",
  "CreateQueue",
  "CreateResourceShare",
  "DeleteJobTemplate",
  "DeletePolicy",
  "DeletePreset",
  "DeleteQueue",
  "DescribeEndpoints",
  "DisassociateCertificate",
  "GetJob",
  "GetJobTemplate",
  "GetPolicy",
  "GetPreset",
  "GetQueue",
  "ListJobs",
  "ListJobTemplates",
  "ListPresets",
  "ListQueues",
  "ListTagsForResource",
  "ListVersions",
  "Probe",
  "PutPolicy",
  "SearchJobs",
  "TagResource",
  "UntagResource",
  "UpdateJobTemplate",
  "UpdatePreset",
  "UpdateQueue",
] as const;

export type MediaconvertAction = (typeof mediaconvertActions)[number];

export function mediaconvert(action: MediaconvertAction | "*"): `mediaconvert:${MediaconvertAction | "*"}` {
  return `mediaconvert:${action}` as `mediaconvert:${MediaconvertAction | "*"}`;
}
