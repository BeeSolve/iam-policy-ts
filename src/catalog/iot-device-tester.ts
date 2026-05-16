export const iotDeviceTesterActions = [
  "CheckVersion",
  "DownloadTestSuite",
  "LatestIdt",
  "SendMetrics",
  "SupportedVersion",
] as const;

export type IotDeviceTesterAction = (typeof iotDeviceTesterActions)[number];

export function iotDeviceTester(action: IotDeviceTesterAction | "*"): `iot-device-tester:${IotDeviceTesterAction | "*"}` {
  return `iot-device-tester:${action}` as `iot-device-tester:${IotDeviceTesterAction | "*"}`;
}
