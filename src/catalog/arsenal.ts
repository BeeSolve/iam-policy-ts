export const arsenalActions = [
  "RegisterOnPremisesAgent",
] as const;

export type ArsenalAction = (typeof arsenalActions)[number];

export function arsenal(action: ArsenalAction | "*"): `arsenal:${ArsenalAction | "*"}` {
  return `arsenal:${action}` as `arsenal:${ArsenalAction | "*"}`;
}
