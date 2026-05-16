export const licenseManagerUserSubscriptionsActions = [
  "AssociateUser",
  "CreateLicenseServerEndpoint",
  "DeleteLicenseServerEndpoint",
  "DeregisterIdentityProvider",
  "DisassociateUser",
  "ListIdentityProviders",
  "ListInstances",
  "ListLicenseServerEndpoints",
  "ListProductSubscriptions",
  "ListTagsForResource",
  "ListUserAssociations",
  "RegisterIdentityProvider",
  "StartProductSubscription",
  "StopProductSubscription",
  "TagResource",
  "UntagResource",
  "UpdateIdentityProviderSettings",
] as const;

export type LicenseManagerUserSubscriptionsAction = (typeof licenseManagerUserSubscriptionsActions)[number];

export function licenseManagerUserSubscriptions(action: LicenseManagerUserSubscriptionsAction | "*"): `license-manager-user-subscriptions:${LicenseManagerUserSubscriptionsAction | "*"}` {
  return `license-manager-user-subscriptions:${action}` as `license-manager-user-subscriptions:${LicenseManagerUserSubscriptionsAction | "*"}`;
}
