export const codewhispererActions = [
  "AllowVendedLogDeliveryForResource",
  "AssociateCustomizationPermission",
  "CreateCustomization",
  "CreateProfile",
  "DeleteCustomization",
  "DeleteProfile",
  "DisassociateCustomizationPermission",
  "GenerateRecommendations",
  "GetCustomization",
  "ListCustomizationPermissions",
  "ListCustomizations",
  "ListCustomizationVersions",
  "ListProfiles",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateCustomization",
  "UpdateProfile",
] as const;

export type CodewhispererAction = (typeof codewhispererActions)[number];

export function codewhisperer(action: CodewhispererAction | "*"): `codewhisperer:${CodewhispererAction | "*"}` {
  return `codewhisperer:${action}` as `codewhisperer:${CodewhispererAction | "*"}`;
}
