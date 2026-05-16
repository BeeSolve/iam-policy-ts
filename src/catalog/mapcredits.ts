export const mapcreditsActions = [
  "ListAssociatedPrograms",
  "ListQuarterCredits",
  "ListQuarterSpend",
] as const;

export type MapcreditsAction = (typeof mapcreditsActions)[number];

export function mapcredits(action: MapcreditsAction | "*"): `mapcredits:${MapcreditsAction | "*"}` {
  return `mapcredits:${action}` as `mapcredits:${MapcreditsAction | "*"}`;
}
