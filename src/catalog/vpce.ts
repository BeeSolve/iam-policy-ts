export const vpceActions = [
  "AllowMultiRegion",
] as const;

export type VpceAction = (typeof vpceActions)[number];

export function vpce(action: VpceAction | "*"): `vpce:${VpceAction | "*"}` {
  return `vpce:${action}` as `vpce:${VpceAction | "*"}`;
}
