export const paymentsActions = [
  "AcceptFinancingApplicationTerms",
  "CreateFinancingApplication",
  "CreatePaymentInstrument",
  "DeletePaymentInstrument",
  "GetFinancingApplication",
  "GetFinancingLine",
  "GetFinancingLineWithdrawal",
  "GetFinancingOption",
  "GetPaymentInstrument",
  "GetPaymentStatus",
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
