export const s3ObjectLambdaActions = [
  "AbortMultipartUpload",
  "DeleteObject",
  "DeleteObjectTagging",
  "DeleteObjectVersion",
  "DeleteObjectVersionTagging",
  "GetObject",
  "GetObjectAcl",
  "GetObjectLegalHold",
  "GetObjectRetention",
  "GetObjectTagging",
  "GetObjectVersion",
  "GetObjectVersionAcl",
  "GetObjectVersionTagging",
  "ListBucket",
  "ListBucketMultipartUploads",
  "ListBucketVersions",
  "ListMultipartUploadParts",
  "PutObject",
  "PutObjectAcl",
  "PutObjectLegalHold",
  "PutObjectRetention",
  "PutObjectTagging",
  "PutObjectVersionAcl",
  "PutObjectVersionTagging",
  "RestoreObject",
  "WriteGetObjectResponse",
] as const;

export type S3ObjectLambdaAction = (typeof s3ObjectLambdaActions)[number];

export function s3ObjectLambda(action: S3ObjectLambdaAction | "*"): `s3-object-lambda:${S3ObjectLambdaAction | "*"}` {
  return `s3-object-lambda:${action}` as `s3-object-lambda:${S3ObjectLambdaAction | "*"}`;
}
