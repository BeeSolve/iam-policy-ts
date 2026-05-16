export const marketplacecommerceanalyticsActions = [
  "GenerateDataSet",
  "StartSupportDataExport",
] as const;

export type MarketplacecommerceanalyticsAction = (typeof marketplacecommerceanalyticsActions)[number];

export function marketplacecommerceanalytics(action: MarketplacecommerceanalyticsAction | "*"): `marketplacecommerceanalytics:${MarketplacecommerceanalyticsAction | "*"}` {
  return `marketplacecommerceanalytics:${action}` as `marketplacecommerceanalytics:${MarketplacecommerceanalyticsAction | "*"}`;
}
