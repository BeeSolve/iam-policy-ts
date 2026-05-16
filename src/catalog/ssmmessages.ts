export const ssmmessagesActions = [
  "CreateControlChannel",
  "CreateDataChannel",
  "OpenControlChannel",
  "OpenDataChannel",
] as const;

export type SsmmessagesAction = (typeof ssmmessagesActions)[number];

export function ssmmessages(action: SsmmessagesAction | "*"): `ssmmessages:${SsmmessagesAction | "*"}` {
  return `ssmmessages:${action}` as `ssmmessages:${SsmmessagesAction | "*"}`;
}
