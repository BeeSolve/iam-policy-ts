export const billingActions = [
  "AssociateSourceViews",
  "CreateBillingView",
  "DeleteBillingView",
  "DeleteResourcePolicy",
  "DisassociateSourceViews",
  "GetBillingData",
  "GetBillingDetails",
  "GetBillingNotifications",
  "GetBillingPreferences",
  "GetBillingView",
  "GetBillingViewData",
  "GetContractInformation",
  "GetCreditAllocationHistory",
  "GetCredits",
  "GetEnterpriseSupportChargeSummary",
  "GetEnterpriseSupportContractDetails",
  "GetIAMAccessPreference",
  "GetResourcePolicy",
  "GetSellerOfRecord",
  "ListBillingViews",
  "ListEnterpriseSupportLinkedAccountCharges",
  "ListSourceViewsForBillingView",
  "ListTagsForResource",
  "PutContractInformation",
  "PutResourcePolicy",
  "RedeemCredits",
  "TagResource",
  "UntagResource",
  "UpdateBillingPreferences",
  "UpdateBillingView",
  "UpdateIAMAccessPreference",
  "UseSourceView",
] as const;

export type BillingAction = (typeof billingActions)[number];

export function billing(action: BillingAction | "*"): `billing:${BillingAction | "*"}` {
  return `billing:${action}` as `billing:${BillingAction | "*"}`;
}
