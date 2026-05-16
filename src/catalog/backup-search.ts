export const backupSearchActions = [
  "GetSearchJob",
  "GetSearchResultExportJob",
  "ListSearchJobBackups",
  "ListSearchJobResults",
  "ListSearchJobs",
  "ListSearchResultExportJobs",
  "ListTagsForResource",
  "StartSearchJob",
  "StartSearchResultExportJob",
  "StopSearchJob",
  "TagResource",
  "UntagResource",
] as const;

export type BackupSearchAction = (typeof backupSearchActions)[number];

export function backupSearch(action: BackupSearchAction | "*"): `backup-search:${BackupSearchAction | "*"}` {
  return `backup-search:${action}` as `backup-search:${BackupSearchAction | "*"}`;
}
