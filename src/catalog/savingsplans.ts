export const savingsplansActions = [
  "CreateSavingsPlan",
  "DeleteQueuedSavingsPlan",
  "DescribeSavingsPlanRates",
  "DescribeSavingsPlans",
  "DescribeSavingsPlansOfferingRates",
  "DescribeSavingsPlansOfferings",
  "ListTagsForResource",
  "ReturnSavingsPlan",
  "TagResource",
  "UntagResource",
] as const;

export type SavingsplansAction = (typeof savingsplansActions)[number];

export function savingsplans(action: SavingsplansAction | "*"): `savingsplans:${SavingsplansAction | "*"}` {
  return `savingsplans:${action}` as `savingsplans:${SavingsplansAction | "*"}`;
}
