export const mediaimportActions = [
  "CreateDatabaseBinarySnapshot",
] as const;

export type MediaimportAction = (typeof mediaimportActions)[number];

export function mediaimport(action: MediaimportAction | "*"): `mediaimport:${MediaimportAction | "*"}` {
  return `mediaimport:${action}` as `mediaimport:${MediaimportAction | "*"}`;
}
