export const codeguruActions = [
  "GetCodeGuruFreeTrialSummary",
] as const;

export type CodeguruAction = (typeof codeguruActions)[number];

export function codeguru(action: CodeguruAction | "*"): `codeguru:${CodeguruAction | "*"}` {
  return `codeguru:${action}` as `codeguru:${CodeguruAction | "*"}`;
}
