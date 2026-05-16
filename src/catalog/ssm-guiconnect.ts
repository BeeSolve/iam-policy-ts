export const ssmGuiconnectActions = [
  "CancelConnection",
  "DeleteConnectionRecordingPreferences",
  "GetConnection",
  "GetConnectionRecordingPreferences",
  "ListConnections",
  "StartConnection",
  "UpdateConnectionRecordingPreferences",
] as const;

export type SsmGuiconnectAction = (typeof ssmGuiconnectActions)[number];

export function ssmGuiconnect(action: SsmGuiconnectAction | "*"): `ssm-guiconnect:${SsmGuiconnectAction | "*"}` {
  return `ssm-guiconnect:${action}` as `ssm-guiconnect:${SsmGuiconnectAction | "*"}`;
}
