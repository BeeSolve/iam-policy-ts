export const budgetsActions = [
  "CreateBudgetAction",
  "DeleteBudgetAction",
  "DescribeBudgetAction",
  "DescribeBudgetActionHistories",
  "DescribeBudgetActionsForAccount",
  "DescribeBudgetActionsForBudget",
  "ExecuteBudgetAction",
  "ListTagsForResource",
  "ModifyBudget",
  "TagResource",
  "UntagResource",
  "UpdateBudgetAction",
  "ViewBudget",
] as const;

export type BudgetsAction = (typeof budgetsActions)[number];

export function budgets(action: BudgetsAction | "*"): `budgets:${BudgetsAction | "*"}` {
  return `budgets:${action}` as `budgets:${BudgetsAction | "*"}`;
}
