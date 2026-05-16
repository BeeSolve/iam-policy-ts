export const consoleappActions = [
  "GetDeviceIdentity",
  "ListDeviceIdentities",
] as const;

export type ConsoleappAction = (typeof consoleappActions)[number];

export function consoleapp(action: ConsoleappAction | "*"): `consoleapp:${ConsoleappAction | "*"}` {
  return `consoleapp:${action}` as `consoleapp:${ConsoleappAction | "*"}`;
}
