export const controlcatalogActions = [
  "GetControl",
  "ListCommonControls",
  "ListControlMappings",
  "ListControls",
  "ListDomains",
  "ListObjectives",
] as const;

export type ControlcatalogAction = (typeof controlcatalogActions)[number];

export function controlcatalog(action: ControlcatalogAction | "*"): `controlcatalog:${ControlcatalogAction | "*"}` {
  return `controlcatalog:${action}` as `controlcatalog:${ControlcatalogAction | "*"}`;
}
