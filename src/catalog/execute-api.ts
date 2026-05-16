export const executeApiActions = [
  "InvalidateCache",
  "Invoke",
  "ManageConnections",
] as const;

export type ExecuteApiAction = (typeof executeApiActions)[number];

export function executeApi(action: ExecuteApiAction | "*"): `execute-api:${ExecuteApiAction | "*"}` {
  return `execute-api:${action}` as `execute-api:${ExecuteApiAction | "*"}`;
}
