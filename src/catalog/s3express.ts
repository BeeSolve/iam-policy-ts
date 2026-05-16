export const s3expressActions = [
  "CreateAccessPoint",
  "CreateBucket",
  "CreateSession",
  "DeleteAccessPoint",
  "DeleteAccessPointPolicy",
  "DeleteAccessPointScope",
  "DeleteBucket",
  "DeleteBucketPolicy",
  "GetAccessPoint",
  "GetAccessPointPolicy",
  "GetAccessPointScope",
  "GetBucketPolicy",
  "GetEncryptionConfiguration",
  "GetInventoryConfiguration",
  "GetLifecycleConfiguration",
  "GetMetricsConfiguration",
  "ListAccessPointsForDirectoryBuckets",
  "ListAllMyDirectoryBuckets",
  "ListTagsForResource",
  "PutAccessPointPolicy",
  "PutAccessPointScope",
  "PutBucketPolicy",
  "PutEncryptionConfiguration",
  "PutInventoryConfiguration",
  "PutLifecycleConfiguration",
  "PutMetricsConfiguration",
  "TagResource",
  "UntagResource",
] as const;

export type S3expressAction = (typeof s3expressActions)[number];

export function s3express(action: S3expressAction | "*"): `s3express:${S3expressAction | "*"}` {
  return `s3express:${action}` as `s3express:${S3expressAction | "*"}`;
}
