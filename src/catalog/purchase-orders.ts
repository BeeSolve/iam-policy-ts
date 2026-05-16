export const purchaseOrdersActions = [
  "AddPurchaseOrder",
  "DeletePurchaseOrder",
  "GetConsoleActionSetEnforced",
  "GetPurchaseOrder",
  "ListPurchaseOrderInvoices",
  "ListPurchaseOrders",
  "ListTagsForResource",
  "ModifyPurchaseOrders",
  "TagResource",
  "UntagResource",
  "UpdateConsoleActionSetEnforced",
  "UpdatePurchaseOrder",
  "UpdatePurchaseOrderStatus",
  "ViewPurchaseOrders",
] as const;

export type PurchaseOrdersAction = (typeof purchaseOrdersActions)[number];

export function purchaseOrders(action: PurchaseOrdersAction | "*"): `purchase-orders:${PurchaseOrdersAction | "*"}` {
  return `purchase-orders:${action}` as `purchase-orders:${PurchaseOrdersAction | "*"}`;
}
