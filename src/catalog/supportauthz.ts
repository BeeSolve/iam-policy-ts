export const supportauthzActions = [
  "CreateSupportPermit",
  "DeleteSupportPermit",
  "GetAction",
  "GetSupportPermit",
  "ListActions",
  "ListSupportPermitRequests",
  "ListSupportPermits",
  "ListTagsForResource",
  "RegisterKey",
  "RejectSupportPermitRequest",
  "TagResource",
  "UntagResource",
] as const;

export type SupportauthzAction = (typeof supportauthzActions)[number];

export function supportauthz(action: SupportauthzAction | "*"): `supportauthz:${SupportauthzAction | "*"}` {
  return `supportauthz:${action}` as `supportauthz:${SupportauthzAction | "*"}`;
}
