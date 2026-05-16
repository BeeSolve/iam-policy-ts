export const elementalSupportContentActions = [
  "Query",
] as const;

export type ElementalSupportContentAction = (typeof elementalSupportContentActions)[number];

export function elementalSupportContent(action: ElementalSupportContentAction | "*"): `elemental-support-content:${ElementalSupportContentAction | "*"}` {
  return `elemental-support-content:${action}` as `elemental-support-content:${ElementalSupportContentAction | "*"}`;
}
