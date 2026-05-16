export const awsconnectorActions = [
  "GetConnectorHealth",
  "RegisterConnector",
  "ValidateConnectorId",
] as const;

export type AwsconnectorAction = (typeof awsconnectorActions)[number];

export function awsconnector(action: AwsconnectorAction | "*"): `awsconnector:${AwsconnectorAction | "*"}` {
  return `awsconnector:${action}` as `awsconnector:${AwsconnectorAction | "*"}`;
}
