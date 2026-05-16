export const cloudfrontKeyvaluestoreActions = [
  "DeleteKey",
  "DescribeKeyValueStore",
  "GetKey",
  "ListKeys",
  "PutKey",
  "UpdateKeys",
] as const;

export type CloudfrontKeyvaluestoreAction = (typeof cloudfrontKeyvaluestoreActions)[number];

export function cloudfrontKeyvaluestore(action: CloudfrontKeyvaluestoreAction | "*"): `cloudfront-keyvaluestore:${CloudfrontKeyvaluestoreAction | "*"}` {
  return `cloudfront-keyvaluestore:${action}` as `cloudfront-keyvaluestore:${CloudfrontKeyvaluestoreAction | "*"}`;
}
