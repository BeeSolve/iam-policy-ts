export const snowDeviceManagementActions = [
  "CancelTask",
  "CreateTask",
  "DescribeDevice",
  "DescribeDeviceEc2Instances",
  "DescribeExecution",
  "DescribeTask",
  "ListDeviceResources",
  "ListDevices",
  "ListExecutions",
  "ListTagsForResource",
  "ListTasks",
  "TagResource",
  "UntagResource",
] as const;

export type SnowDeviceManagementAction = (typeof snowDeviceManagementActions)[number];

export function snowDeviceManagement(action: SnowDeviceManagementAction | "*"): `snow-device-management:${SnowDeviceManagementAction | "*"}` {
  return `snow-device-management:${action}` as `snow-device-management:${SnowDeviceManagementAction | "*"}`;
}
