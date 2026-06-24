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
  "GetCumulativeTracking",
  "GetIAMAccessPreference",
  "GetMonthlyTracking",
  "GetResourcePolicy",
  "GetSellerOfRecord",
  "ListBillingViews",
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
