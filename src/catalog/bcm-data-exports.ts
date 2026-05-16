export const bcmDataExportsActions = [
  "CreateExport",
  "DeleteExport",
  "GetExecution",
  "GetExport",
  "GetTable",
  "ListExecutions",
  "ListExports",
  "ListTables",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateExport",
] as const;

export type BcmDataExportsAction = (typeof bcmDataExportsActions)[number];

export function bcmDataExports(action: BcmDataExportsAction | "*"): `bcm-data-exports:${BcmDataExportsAction | "*"}` {
  return `bcm-data-exports:${action}` as `bcm-data-exports:${BcmDataExportsAction | "*"}`;
}
