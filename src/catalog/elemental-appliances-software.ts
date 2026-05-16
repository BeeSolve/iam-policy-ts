export const elementalAppliancesSoftwareActions = [
  "CompleteUpload",
  "CreateOrderV1",
  "CreateQuote",
  "GetAvsCorrectAddress",
  "GetBillingAddresses",
  "GetDeliveryAddressesV2",
  "GetOrder",
  "GetOrdersV2",
  "GetQuote",
  "GetTaxes",
  "ListQuotes",
  "StartUpload",
  "SubmitOrderV1",
  "UpdateQuote",
] as const;

export type ElementalAppliancesSoftwareAction = (typeof elementalAppliancesSoftwareActions)[number];

export function elementalAppliancesSoftware(action: ElementalAppliancesSoftwareAction | "*"): `elemental-appliances-software:${ElementalAppliancesSoftwareAction | "*"}` {
  return `elemental-appliances-software:${action}` as `elemental-appliances-software:${ElementalAppliancesSoftwareAction | "*"}`;
}
