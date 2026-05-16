export const rhelkbActions = [
  "GetRhelURL",
] as const;

export type RhelkbAction = (typeof rhelkbActions)[number];

export function rhelkb(action: RhelkbAction | "*"): `rhelkb:${RhelkbAction | "*"}` {
  return `rhelkb:${action}` as `rhelkb:${RhelkbAction | "*"}`;
}
