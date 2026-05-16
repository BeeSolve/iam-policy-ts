export const iotdeviceadvisorActions = [
  "CreateSuiteDefinition",
  "DeleteSuiteDefinition",
  "GetEndpoint",
  "GetSuiteDefinition",
  "GetSuiteRun",
  "GetSuiteRunReport",
  "ListSuiteDefinitions",
  "ListSuiteRuns",
  "ListTagsForResource",
  "StartSuiteRun",
  "StopSuiteRun",
  "TagResource",
  "UntagResource",
  "UpdateSuiteDefinition",
] as const;

export type IotdeviceadvisorAction = (typeof iotdeviceadvisorActions)[number];

export function iotdeviceadvisor(action: IotdeviceadvisorAction | "*"): `iotdeviceadvisor:${IotdeviceadvisorAction | "*"}` {
  return `iotdeviceadvisor:${action}` as `iotdeviceadvisor:${IotdeviceadvisorAction | "*"}`;
}
