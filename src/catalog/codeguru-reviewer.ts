export const codeguruReviewerActions = [
  "AssociateRepository",
  "CreateCodeReview",
  "CreateConnectionToken",
  "DescribeCodeReview",
  "DescribeRecommendationFeedback",
  "DescribeRepositoryAssociation",
  "DisassociateRepository",
  "GetMetricsData",
  "ListCodeReviews",
  "ListRecommendationFeedback",
  "ListRecommendations",
  "ListRepositoryAssociations",
  "ListTagsForResource",
  "ListThirdPartyRepositories",
  "PutRecommendationFeedback",
  "TagResource",
  "UnTagResource",
] as const;

export type CodeguruReviewerAction = (typeof codeguruReviewerActions)[number];

export function codeguruReviewer(action: CodeguruReviewerAction | "*"): `codeguru-reviewer:${CodeguruReviewerAction | "*"}` {
  return `codeguru-reviewer:${action}` as `codeguru-reviewer:${CodeguruReviewerAction | "*"}`;
}
