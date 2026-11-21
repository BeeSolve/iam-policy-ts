export const paymentsActions = [
  "AcceptFinancingApplicationTerms",
  "BatchGetFinancialRecord",
  "CreateConnectedAccount",
  "CreateFinancingApplication",
  "CreatePaymentInstrument",
  "DeleteConnectedAccount",
  "DeletePaymentInstrument",
  "GetAccountBalance",
  "GetConnectedAccount",
  "GetFinancialRecord",
  "GetFinancingApplication",
  "GetFinancingLine",
  "GetFinancingLineWithdrawal",
  "GetFinancingOption",
  "GetPaymentInstrument",
  "GetPaymentStatus",
  "ListConnectedAccounts",
  "ListFinancialRecords",
  "ListFinancingApplications",
  "ListFinancingLines",
  "ListFinancingLineWithdrawals",
  "ListPaymentInstruments",
  "ListPaymentPreferences",
  "ListPaymentProgramOptions",
  "ListPaymentProgramStatus",
  "ListTagsForResource",
  "MakePayment",
  "TagResource",
  "UntagResource",
  "UpdateFinancingApplication",
  "UpdatePaymentInstrument",
  "UpdatePaymentPreferences",
] as const;

export type PaymentsAction = (typeof paymentsActions)[number];

export function payments(action: PaymentsAction | "*"): `payments:${PaymentsAction | "*"}` {
  return `payments:${action}` as `payments:${PaymentsAction | "*"}`;
}
