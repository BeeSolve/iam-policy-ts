export const pricingplanmanagerActions = [
  "ApprovePaidSubscription",
  "AssociateResourcesToSubscription",
  "CancelSubscription",
  "CancelSubscriptionChange",
  "CreateSubscription",
  "DisassociateResourcesFromSubscription",
  "GetSubscription",
  "ListSubscriptions",
  "UpdateSubscription",
] as const;

export type PricingplanmanagerAction = (typeof pricingplanmanagerActions)[number];

export function pricingplanmanager(action: PricingplanmanagerAction | "*"): `pricingplanmanager:${PricingplanmanagerAction | "*"}` {
  return `pricingplanmanager:${action}` as `pricingplanmanager:${PricingplanmanagerAction | "*"}`;
}
