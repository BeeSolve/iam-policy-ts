export const finspaceApiActions = [
  "GetProgrammaticAccessCredentials",
] as const;

export type FinspaceApiAction = (typeof finspaceApiActions)[number];

export function finspaceApi(action: FinspaceApiAction | "*"): `finspace-api:${FinspaceApiAction | "*"}` {
  return `finspace-api:${action}` as `finspace-api:${FinspaceApiAction | "*"}`;
}
