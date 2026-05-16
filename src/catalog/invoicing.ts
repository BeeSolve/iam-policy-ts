export const invoicingActions = [
  "BatchGetInvoiceProfile",
  "CreateInvoiceUnit",
  "CreateProcurementPortalPreference",
  "DeleteInvoiceUnit",
  "DeleteProcurementPortalPreference",
  "GetInvoiceCorrection",
  "GetInvoiceEmailDeliveryPreferences",
  "GetInvoicePDF",
  "GetInvoiceUnit",
  "GetProcurementPortalPreference",
  "ListInvoiceCorrections",
  "ListInvoiceSummaries",
  "ListInvoiceUnits",
  "ListProcurementPortalPreferences",
  "ListTagsForResource",
  "PutInvoiceEmailDeliveryPreferences",
  "PutProcurementPortalPreference",
  "StartInvoiceCorrection",
  "TagResource",
  "UntagResource",
  "UpdateInvoiceUnit",
  "UpdateProcurementPortalPreferenceStatus",
] as const;

export type InvoicingAction = (typeof invoicingActions)[number];

export function invoicing(action: InvoicingAction | "*"): `invoicing:${InvoicingAction | "*"}` {
  return `invoicing:${action}` as `invoicing:${InvoicingAction | "*"}`;
}
