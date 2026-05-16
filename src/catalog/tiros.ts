export const tirosActions = [
  "CreateQuery",
  "ExtendQuery",
  "GetQueryAnswer",
  "GetQueryExplanation",
  "GetQueryExtensionAccounts",
] as const;

export type TirosAction = (typeof tirosActions)[number];

export function tiros(action: TirosAction | "*"): `tiros:${TirosAction | "*"}` {
  return `tiros:${action}` as `tiros:${TirosAction | "*"}`;
}
