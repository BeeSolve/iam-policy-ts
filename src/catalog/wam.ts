export const wamActions = [
  "AuthenticatePackager",
] as const;

export type WamAction = (typeof wamActions)[number];

export function wam(action: WamAction | "*"): `wam:${WamAction | "*"}` {
  return `wam:${action}` as `wam:${WamAction | "*"}`;
}
