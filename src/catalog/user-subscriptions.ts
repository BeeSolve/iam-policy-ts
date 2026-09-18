export const userSubscriptionsActions = [
  "CancelPurchaseSession",
  "ConfirmPurchaseSession",
  "CreateClaim",
  "CreateClaimAddOn",
  "CreatePurchaseSession",
  "CreateUpdatePlanPreview",
  "DeleteAutoTopUpRule",
  "DeleteClaim",
  "GetAutoTopUpRule",
  "GetCurrentPlanDetails",
  "GetEffectiveUsageLimit",
  "GetPurchaseSession",
  "GetUsageLimitHistory",
  "ListApplicationClaims",
  "ListClaimAddOns",
  "ListClaims",
  "ListEntitlements",
  "ListUsageLimits",
  "ListUserSubscriptions",
  "SetAutoTopUpRule",
  "SetOverageConfig",
  "SetUsageLimit",
  "UpdateClaim",
] as const;

export type UserSubscriptionsAction = (typeof userSubscriptionsActions)[number];

export function userSubscriptions(action: UserSubscriptionsAction | "*"): `user-subscriptions:${UserSubscriptionsAction | "*"}` {
  return `user-subscriptions:${action}` as `user-subscriptions:${UserSubscriptionsAction | "*"}`;
}
