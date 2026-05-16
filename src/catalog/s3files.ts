export const s3filesActions = [
  "ClientMount",
  "ClientRootAccess",
  "ClientWrite",
  "CreateAccessPoint",
  "CreateFileSystem",
  "CreateMountTarget",
  "DeleteAccessPoint",
  "DeleteFileSystem",
  "DeleteFileSystemPolicy",
  "DeleteMountTarget",
  "GetAccessPoint",
  "GetFileSystem",
  "GetFileSystemPolicy",
  "GetMountTarget",
  "GetSynchronizationConfiguration",
  "ListAccessPoints",
  "ListFileSystems",
  "ListMountTargets",
  "ListTagsForResource",
  "PutFileSystemPolicy",
  "PutSynchronizationConfiguration",
  "TagResource",
  "UntagResource",
  "UpdateMountTarget",
] as const;

export type S3filesAction = (typeof s3filesActions)[number];

export function s3files(action: S3filesAction | "*"): `s3files:${S3filesAction | "*"}` {
  return `s3files:${action}` as `s3files:${S3filesAction | "*"}`;
}
