export const billingconductorActions = [
  "AssociateAccounts",
  "AssociatePricingRules",
  "BatchAssociateResourcesToCustomLineItem",
  "BatchDisassociateResourcesFromCustomLineItem",
  "CreateBillingGroup",
  "CreateCustomLineItem",
  "CreatePricingPlan",
  "CreatePricingRule",
  "DeleteBillingGroup",
  "DeleteCustomLineItem",
  "DeletePricingPlan",
  "DeletePricingRule",
  "DisassociateAccounts",
  "DisassociatePricingRules",
  "GetBillingGroupCostReport",
  "ListAccountAssociations",
  "ListBillingGroupCostReports",
  "ListBillingGroups",
  "ListCustomLineItems",
  "ListCustomLineItemVersions",
  "ListPricingPlans",
  "ListPricingPlansAssociatedWithPricingRule",
  "ListPricingRules",
  "ListPricingRulesAssociatedToPricingPlan",
  "ListResourcesAssociatedToCustomLineItem",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateBillingGroup",
  "UpdateCustomLineItem",
  "UpdatePricingPlan",
  "UpdatePricingRule",
] as const;

export type BillingconductorAction = (typeof billingconductorActions)[number];

export function billingconductor(action: BillingconductorAction | "*"): `billingconductor:${BillingconductorAction | "*"}` {
  return `billingconductor:${action}` as `billingconductor:${BillingconductorAction | "*"}`;
}
