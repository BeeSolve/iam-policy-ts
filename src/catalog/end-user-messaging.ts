export const endUserMessagingActions = [
  "CreateBrandProfile",
  "CreateBrandProfileAttributes",
  "CreateBrandProfileFromRegistration",
  "CreateNotifyCodeConfiguration",
  "CreateRegistrationsFromBrandProfile",
  "DeleteBrandProfile",
  "DeleteBrandProfileAttribute",
  "DeleteNotifyCodeConfiguration",
  "GetBrandProfile",
  "GetBrandProfileAttribute",
  "GetJob",
  "GetNotifyCodeConfiguration",
  "ListBrandProfileAttributes",
  "ListBrandProfiles",
  "ListJobs",
  "ListNotifyCodeConfigurations",
  "ListRegistrationsFromBrandProfile",
  "ListTagsForResource",
  "SendNotifyCodeVerification",
  "TagResource",
  "UntagResource",
  "UpdateBrandProfile",
  "UpdateBrandProfileAttribute",
  "UpdateBrandProfileFromRegistration",
  "UpdateNotifyCodeConfiguration",
  "UpdateRegistrationsFromBrandProfile",
  "ValidateNotifyCodeVerification",
] as const;

export type EndUserMessagingAction = (typeof endUserMessagingActions)[number];

export function endUserMessaging(action: EndUserMessagingAction | "*"): `end-user-messaging:${EndUserMessagingAction | "*"}` {
  return `end-user-messaging:${action}` as `end-user-messaging:${EndUserMessagingAction | "*"}`;
}
