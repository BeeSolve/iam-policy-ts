export const customerVerificationActions = [
  "CreateCustomerVerificationDetails",
  "CreateUploadUrls",
  "GetCustomerVerificationDetails",
  "GetCustomerVerificationEligibility",
  "GetInheritanceConfig",
  "PutInheritanceConfig",
  "UpdateCustomerVerificationDetails",
] as const;

export type CustomerVerificationAction = (typeof customerVerificationActions)[number];

export function customerVerification(action: CustomerVerificationAction | "*"): `customer-verification:${CustomerVerificationAction | "*"}` {
  return `customer-verification:${action}` as `customer-verification:${CustomerVerificationAction | "*"}`;
}
