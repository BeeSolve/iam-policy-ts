export const bugbustActions = [
  "CreateEvent",
  "EvaluateProfilingGroups",
  "GetEvent",
  "GetJoinEventStatus",
  "JoinEvent",
  "ListBugs",
  "ListEventParticipants",
  "ListEvents",
  "ListEventScores",
  "ListProfilingGroups",
  "ListPullRequests",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateEvent",
  "UpdateWorkItem",
  "UpdateWorkItemAdmin",
] as const;

export type BugbustAction = (typeof bugbustActions)[number];

export function bugbust(action: BugbustAction | "*"): `bugbust:${BugbustAction | "*"}` {
  return `bugbust:${action}` as `bugbust:${BugbustAction | "*"}`;
}
