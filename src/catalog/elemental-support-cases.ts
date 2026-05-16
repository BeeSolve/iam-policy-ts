export const elementalSupportCasesActions = [
  "AddCaseComment",
  "CheckCasePermission",
  "CompleteMultipartUpload",
  "CreateCase",
  "CreateS3CLIUploadCommand",
  "CreateS3DownloadUrl",
  "GetCase",
  "GetCasePermission",
  "GetCases",
  "GetUICache",
  "ListTagsForCase",
  "StartMultipartUpload",
  "TagCase",
  "UntagCase",
  "UpdateCase",
  "UpdateCaseStatus",
  "UpdateMultipartUpload",
] as const;

export type ElementalSupportCasesAction = (typeof elementalSupportCasesActions)[number];

export function elementalSupportCases(action: ElementalSupportCasesAction | "*"): `elemental-support-cases:${ElementalSupportCasesAction | "*"}` {
  return `elemental-support-cases:${action}` as `elemental-support-cases:${ElementalSupportCasesAction | "*"}`;
}
