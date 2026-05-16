export const s3vectorsActions = [
  "CreateIndex",
  "CreateVectorBucket",
  "DeleteIndex",
  "DeleteVectorBucket",
  "DeleteVectorBucketPolicy",
  "DeleteVectors",
  "GetIndex",
  "GetVectorBucket",
  "GetVectorBucketPolicy",
  "GetVectors",
  "ListIndexes",
  "ListTagsForResource",
  "ListVectorBuckets",
  "ListVectors",
  "PutVectorBucketPolicy",
  "PutVectors",
  "QueryVectors",
  "TagResource",
  "UntagResource",
] as const;

export type S3vectorsAction = (typeof s3vectorsActions)[number];

export function s3vectors(action: S3vectorsAction | "*"): `s3vectors:${S3vectorsAction | "*"}` {
  return `s3vectors:${action}` as `s3vectors:${S3vectorsAction | "*"}`;
}
