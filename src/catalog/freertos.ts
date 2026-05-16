export const freertosActions = [
  "CreateSoftwareConfiguration",
  "CreateSubscription",
  "DeleteSoftwareConfiguration",
  "DescribeHardwarePlatform",
  "DescribeSoftwareConfiguration",
  "DescribeSubscription",
  "GetEmpPatchUrl",
  "GetSoftwareURL",
  "GetSoftwareURLForConfiguration",
  "GetSubscriptionBillingAmount",
  "ListFreeRTOSVersions",
  "ListHardwarePlatforms",
  "ListHardwareVendors",
  "ListSoftwareConfigurations",
  "ListSoftwarePatches",
  "ListSubscriptionEmails",
  "ListSubscriptions",
  "UpdateEmailRecipients",
  "UpdateSoftwareConfiguration",
  "VerifyEmail",
] as const;

export type FreertosAction = (typeof freertosActions)[number];

export function freertos(action: FreertosAction | "*"): `freertos:${FreertosAction | "*"}` {
  return `freertos:${action}` as `freertos:${FreertosAction | "*"}`;
}
