export const braketActions = [
  "AcceptUserAgreement",
  "CancelJob",
  "CancelQuantumTask",
  "CreateJob",
  "CreateQuantumTask",
  "CreateSpendingLimit",
  "DeleteSpendingLimit",
  "GetDevice",
  "GetJob",
  "GetQuantumTask",
  "GetServiceLinkedRoleStatus",
  "GetUserAgreementStatus",
  "ListTagsForResource",
  "SearchDevices",
  "SearchJobs",
  "SearchQuantumTasks",
  "SearchSpendingLimits",
  "TagResource",
  "UntagResource",
  "UpdateSpendingLimit",
] as const;

export type BraketAction = (typeof braketActions)[number];

export function braket(action: BraketAction | "*"): `braket:${BraketAction | "*"}` {
  return `braket:${action}` as `braket:${BraketAction | "*"}`;
}
