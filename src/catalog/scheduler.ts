export const schedulerActions = [
  "CreateSchedule",
  "CreateScheduleGroup",
  "DeleteSchedule",
  "DeleteScheduleGroup",
  "GetSchedule",
  "GetScheduleGroup",
  "ListScheduleGroups",
  "ListSchedules",
  "ListSchedulesByTarget",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateSchedule",
] as const;

export type SchedulerAction = (typeof schedulerActions)[number];

export function scheduler(action: SchedulerAction | "*"): `scheduler:${SchedulerAction | "*"}` {
  return `scheduler:${action}` as `scheduler:${SchedulerAction | "*"}`;
}
