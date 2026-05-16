export const ecrPublicActions = [
  "BatchCheckLayerAvailability",
  "BatchDeleteImage",
  "CompleteLayerUpload",
  "CreateRepository",
  "DeleteRepository",
  "DeleteRepositoryPolicy",
  "DescribeImages",
  "DescribeImageTags",
  "DescribeRegistries",
  "DescribeRepositories",
  "GetAuthorizationToken",
  "GetRegistryCatalogData",
  "GetRepositoryCatalogData",
  "GetRepositoryPolicy",
  "InitiateLayerUpload",
  "ListTagsForResource",
  "PutImage",
  "PutRegistryCatalogData",
  "PutRepositoryCatalogData",
  "SetRepositoryPolicy",
  "TagResource",
  "UntagResource",
  "UploadLayerPart",
] as const;

export type EcrPublicAction = (typeof ecrPublicActions)[number];

export function ecrPublic(action: EcrPublicAction | "*"): `ecr-public:${EcrPublicAction | "*"}` {
  return `ecr-public:${action}` as `ecr-public:${EcrPublicAction | "*"}`;
}
