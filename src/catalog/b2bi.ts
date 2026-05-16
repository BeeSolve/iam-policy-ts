export const b2biActions = [
  "CreateCapability",
  "CreatePartnership",
  "CreateProfile",
  "CreateStarterMappingTemplate",
  "CreateTransformer",
  "DeleteCapability",
  "DeletePartnership",
  "DeleteProfile",
  "DeleteTransformer",
  "GenerateMapping",
  "GetCapability",
  "GetPartnership",
  "GetProfile",
  "GetTransformer",
  "GetTransformerJob",
  "ListCapabilities",
  "ListPartnerships",
  "ListProfiles",
  "ListTagsForResource",
  "ListTransformers",
  "StartTransformerJob",
  "TagResource",
  "TestConversion",
  "TestMapping",
  "TestParsing",
  "UntagResource",
  "UpdateCapability",
  "UpdatePartnership",
  "UpdateProfile",
  "UpdateTransformer",
] as const;

export type B2biAction = (typeof b2biActions)[number];

export function b2bi(action: B2biAction | "*"): `b2bi:${B2biAction | "*"}` {
  return `b2bi:${action}` as `b2bi:${B2biAction | "*"}`;
}
