export const transformCustomActions = [
  "CompleteTransformationPackageUpload",
  "ConverseStream",
  "CreateCampaign",
  "CreateTransformationPackageUrl",
  "DeleteCampaign",
  "DeleteKnowledgeItem",
  "DeleteTransformationPackage",
  "ExecuteTransformation",
  "GetCampaign",
  "GetKnowledgeItem",
  "GetTransformationPackageUrl",
  "ListCampaignRepositories",
  "ListCampaigns",
  "ListKnowledgeItems",
  "ListTagsForResource",
  "ListTransformationPackageMetadata",
  "TagResource",
  "UntagResource",
  "UpdateCampaign",
  "UpdateCampaignRepositoryStatus",
  "UpdateKnowledgeItemConfiguration",
  "UpdateKnowledgeItemStatus",
] as const;

export type TransformCustomAction = (typeof transformCustomActions)[number];

export function transformCustom(action: TransformCustomAction | "*"): `transform-custom:${TransformCustomAction | "*"}` {
  return `transform-custom:${action}` as `transform-custom:${TransformCustomAction | "*"}`;
}
