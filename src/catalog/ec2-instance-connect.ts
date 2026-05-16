export const ec2InstanceConnectActions = [
  "OpenTunnel",
  "SendSerialConsoleSSHPublicKey",
  "SendSSHPublicKey",
] as const;

export type Ec2InstanceConnectAction = (typeof ec2InstanceConnectActions)[number];

export function ec2InstanceConnect(action: Ec2InstanceConnectAction | "*"): `ec2-instance-connect:${Ec2InstanceConnectAction | "*"}` {
  return `ec2-instance-connect:${action}` as `ec2-instance-connect:${Ec2InstanceConnectAction | "*"}`;
}
