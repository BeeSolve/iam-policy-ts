export const backupStorageActions = [
  "CommitBackupJob",
  "DeleteObjects",
  "DescribeBackupJob",
  "GetBaseBackup",
  "GetChunk",
  "GetIncrementalBaseBackup",
  "GetObjectMetadata",
  "ListChunks",
  "ListObjects",
  "MountCapsule",
  "NotifyObjectComplete",
  "PutChunk",
  "PutObject",
  "StartObject",
  "UpdateObjectComplete",
] as const;

export type BackupStorageAction = (typeof backupStorageActions)[number];

export function backupStorage(action: BackupStorageAction | "*"): `backup-storage:${BackupStorageAction | "*"}` {
  return `backup-storage:${action}` as `backup-storage:${BackupStorageAction | "*"}`;
}
