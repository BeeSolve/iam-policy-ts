export const eventsbilltoawsActions = [
  "approve",
  "info",
] as const;

export type EventsbilltoawsAction = (typeof eventsbilltoawsActions)[number];

export function eventsbilltoaws(action: EventsbilltoawsAction | "*"): `eventsbilltoaws:${EventsbilltoawsAction | "*"}` {
  return `eventsbilltoaws:${action}` as `eventsbilltoaws:${EventsbilltoawsAction | "*"}`;
}
