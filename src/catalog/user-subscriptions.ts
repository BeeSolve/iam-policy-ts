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
  "GetOverageConfig",
  "GetPurchaseSession",
  "GetUsageLimitHistory",
  "ListApplicationClaims",
  "ListClaimAddOns",
  "ListClaims",
  "ListEntitlements",
  "ListUsageLimits",
  "ListUsagesAndLimits",
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
