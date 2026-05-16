export const importexportActions = [
  "CancelJob",
  "CreateJob",
  "GetShippingLabel",
  "GetStatus",
  "ListJobs",
  "UpdateJob",
] as const;

export type ImportexportAction = (typeof importexportActions)[number];

export function importexport(action: ImportexportAction | "*"): `importexport:${ImportexportAction | "*"}` {
  return `importexport:${action}` as `importexport:${ImportexportAction | "*"}`;
}
