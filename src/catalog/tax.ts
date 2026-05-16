export const taxActions = [
  "BatchDeleteTaxRegistration",
  "BatchPutTaxRegistration",
  "CancelDocument",
  "CreateDocument",
  "DeleteSupplementalTaxRegistration",
  "DeleteTaxRegistration",
  "GetDocument",
  "GetDocumentUploadUrl",
  "GetExemptions",
  "GetTaxInfoReportingDocument",
  "GetTaxInheritance",
  "GetTaxInterview",
  "GetTaxRegistration",
  "GetTaxRegistrationDocument",
  "ListDocuments",
  "ListSupplementalTaxRegistrations",
  "ListTaxRegistrations",
  "ListWithholdingEligibleInvoices",
  "PutSupplementalTaxRegistration",
  "PutTaxInheritance",
  "PutTaxInterview",
  "PutTaxRegistration",
  "UpdateExemptions",
] as const;

export type TaxAction = (typeof taxActions)[number];

export function tax(action: TaxAction | "*"): `tax:${TaxAction | "*"}` {
  return `tax:${action}` as `tax:${TaxAction | "*"}`;
}
