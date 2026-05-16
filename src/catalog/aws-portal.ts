export const awsPortalActions = [
  "GetConsoleActionSetEnforced",
  "ModifyAccount",
  "ModifyBilling",
  "ModifyPaymentMethods",
  "UpdateConsoleActionSetEnforced",
  "ViewAccount",
  "ViewBilling",
  "ViewPaymentMethods",
  "ViewUsage",
] as const;

export type AwsPortalAction = (typeof awsPortalActions)[number];

export function awsPortal(action: AwsPortalAction | "*"): `aws-portal:${AwsPortalAction | "*"}` {
  return `aws-portal:${action}` as `aws-portal:${AwsPortalAction | "*"}`;
}
