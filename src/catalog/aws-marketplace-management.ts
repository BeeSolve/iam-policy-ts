export const awsMarketplaceManagementActions = [
  "GetAdditionalSellerNotificationRecipients",
  "GetBankAccountVerificationDetails",
  "GetSecondaryUserVerificationDetails",
  "GetSellerVerificationDetails",
  "PutAdditionalSellerNotificationRecipients",
  "PutBankAccountVerificationDetails",
  "PutSecondaryUserVerificationDetails",
  "PutSellerVerificationDetails",
  "uploadFiles",
  "viewMarketing",
  "viewReports",
  "viewSettings",
  "viewSupport",
] as const;

export type AwsMarketplaceManagementAction = (typeof awsMarketplaceManagementActions)[number];

export function awsMarketplaceManagement(action: AwsMarketplaceManagementAction | "*"): `aws-marketplace-management:${AwsMarketplaceManagementAction | "*"}` {
  return `aws-marketplace-management:${action}` as `aws-marketplace-management:${AwsMarketplaceManagementAction | "*"}`;
}
