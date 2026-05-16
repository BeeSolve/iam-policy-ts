export const actionRecommendationsActions = [
  "ListRecommendedActions",
] as const;

export type ActionRecommendationsAction = (typeof actionRecommendationsActions)[number];

export function actionRecommendations(action: ActionRecommendationsAction | "*"): `action-recommendations:${ActionRecommendationsAction | "*"}` {
  return `action-recommendations:${action}` as `action-recommendations:${ActionRecommendationsAction | "*"}`;
}
