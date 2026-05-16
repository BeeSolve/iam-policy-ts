export const iotjobsdataActions = [
  "DescribeJobExecution",
  "GetPendingJobExecutions",
  "StartNextPendingJobExecution",
  "UpdateJobExecution",
] as const;

export type IotjobsdataAction = (typeof iotjobsdataActions)[number];

export function iotjobsdata(action: IotjobsdataAction | "*"): `iotjobsdata:${IotjobsdataAction | "*"}` {
  return `iotjobsdata:${action}` as `iotjobsdata:${IotjobsdataAction | "*"}`;
}
