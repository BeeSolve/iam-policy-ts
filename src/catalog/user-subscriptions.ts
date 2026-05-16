export const userSubscriptionsActions = [
  "CreateClaim",
  "DeleteClaim",
  "ListApplicationClaims",
  "ListClaims",
  "ListUserSubscriptions",
  "SetOverageConfig",
  "UpdateClaim",
] as const;

export type UserSubscriptionsAction = (typeof userSubscriptionsActions)[number];

export function userSubscriptions(action: UserSubscriptionsAction | "*"): `user-subscriptions:${UserSubscriptionsAction | "*"}` {
  return `user-subscriptions:${action}` as `user-subscriptions:${UserSubscriptionsAction | "*"}`;
}
