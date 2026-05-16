export const bcmPricingCalculatorActions = [
  "CreateBillEstimate",
  "CreateBillScenario",
  "CreateBillScenarioCommitmentModification",
  "CreateBillScenarioUsageModification",
  "CreateWorkloadEstimate",
  "CreateWorkloadEstimateUsage",
  "DeleteBillEstimate",
  "DeleteBillScenario",
  "DeleteBillScenarioCommitmentModification",
  "DeleteBillScenarioUsageModification",
  "DeleteWorkloadEstimate",
  "DeleteWorkloadEstimateUsage",
  "GetBillEstimate",
  "GetBillScenario",
  "GetPreferences",
  "GetWorkloadEstimate",
  "ListBillEstimateCommitments",
  "ListBillEstimateInputCommitmentModifications",
  "ListBillEstimateInputUsageModifications",
  "ListBillEstimateLineItems",
  "ListBillEstimates",
  "ListBillScenarioCommitmentModifications",
  "ListBillScenarios",
  "ListBillScenarioUsageModifications",
  "ListTagsForResource",
  "ListWorkloadEstimates",
  "ListWorkloadEstimateUsage",
  "TagResource",
  "UntagResource",
  "UpdateBillEstimate",
  "UpdateBillScenario",
  "UpdateBillScenarioCommitmentModification",
  "UpdateBillScenarioUsageModification",
  "UpdatePreferences",
  "UpdateWorkloadEstimate",
  "UpdateWorkloadEstimateUsage",
] as const;

export type BcmPricingCalculatorAction = (typeof bcmPricingCalculatorActions)[number];

export function bcmPricingCalculator(action: BcmPricingCalculatorAction | "*"): `bcm-pricing-calculator:${BcmPricingCalculatorAction | "*"}` {
  return `bcm-pricing-calculator:${action}` as `bcm-pricing-calculator:${BcmPricingCalculatorAction | "*"}`;
}
