export const bcmRecommendedActionsActions = [
  "ListRecommendedActions",
] as const;

export type BcmRecommendedActionsAction = (typeof bcmRecommendedActionsActions)[number];

export function bcmRecommendedActions(action: BcmRecommendedActionsAction | "*"): `bcm-recommended-actions:${BcmRecommendedActionsAction | "*"}` {
  return `bcm-recommended-actions:${action}` as `bcm-recommended-actions:${BcmRecommendedActionsAction | "*"}`;
}
