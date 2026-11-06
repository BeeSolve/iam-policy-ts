export const paymentsActions = [
  "AcceptFinancingApplicationTerms",
  "CreateConnectedAccount",
  "CreateFinancingApplication",
  "CreatePaymentInstrument",
  "DeleteConnectedAccount",
  "DeletePaymentInstrument",
  "GetConnectedAccount",
  "GetFinancingApplication",
  "GetFinancingLine",
  "GetFinancingLineWithdrawal",
  "GetFinancingOption",
  "GetPaymentInstrument",
  "GetPaymentStatus",
  "ListConnectedAccounts",
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
