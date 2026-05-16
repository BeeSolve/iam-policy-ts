export const licenseManagerLinuxSubscriptionsActions = [
  "DeregisterSubscriptionProvider",
  "GetRegisteredSubscriptionProvider",
  "GetServiceSettings",
  "ListLinuxSubscriptionInstances",
  "ListLinuxSubscriptions",
  "ListRegisteredSubscriptionProviders",
  "ListTagsForResource",
  "RegisterSubscriptionProvider",
  "TagResource",
  "UntagResource",
  "UpdateServiceSettings",
] as const;

export type LicenseManagerLinuxSubscriptionsAction = (typeof licenseManagerLinuxSubscriptionsActions)[number];

export function licenseManagerLinuxSubscriptions(action: LicenseManagerLinuxSubscriptionsAction | "*"): `license-manager-linux-subscriptions:${LicenseManagerLinuxSubscriptionsAction | "*"}` {
  return `license-manager-linux-subscriptions:${action}` as `license-manager-linux-subscriptions:${LicenseManagerLinuxSubscriptionsAction | "*"}`;
}
