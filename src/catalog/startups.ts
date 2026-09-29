export const startupsActions = [
  "GetSpendSummary",
] as const;

export type StartupsAction = (typeof startupsActions)[number];

export function startups(action: StartupsAction | "*"): `startups:${StartupsAction | "*"}` {
  return `startups:${action}` as `startups:${StartupsAction | "*"}`;
}
