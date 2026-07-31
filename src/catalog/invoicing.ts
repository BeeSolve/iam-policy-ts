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
  "ListProcurementPortals",
  "ListProcurementPortalSuppliers",
  "ListTagsForResource",
  "PutInvoiceEmailDeliveryPreferences",
  "PutProcurementPortalPreference",
  "SendProcurementPortalValidation",
  "StartInvoiceCorrection",
  "TagResource",
  "UntagResource",
  "UpdateInvoiceUnit",
  "UpdateProcurementPortalPreferenceStatus",
  "VerifyProcurementPortalValidation",
] as const;

export type InvoicingAction = (typeof invoicingActions)[number];

export function invoicing(action: InvoicingAction | "*"): `invoicing:${InvoicingAction | "*"}` {
  return `invoicing:${action}` as `invoicing:${InvoicingAction | "*"}`;
}
