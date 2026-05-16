export const pricingActions = [
  "DescribeServices",
  "GetAttributeValues",
  "GetPriceListFileUrl",
  "GetProducts",
  "ListPriceLists",
] as const;

export type PricingAction = (typeof pricingActions)[number];

export function pricing(action: PricingAction | "*"): `pricing:${PricingAction | "*"}` {
  return `pricing:${action}` as `pricing:${PricingAction | "*"}`;
}
