export const sdbActions = [
  "BatchDeleteAttributes",
  "BatchPutAttributes",
  "CreateDomain",
  "DeleteAttributes",
  "DeleteDomain",
  "DomainMetadata",
  "GetAttributes",
  "GetExport",
  "ListDomains",
  "ListExports",
  "PutAttributes",
  "Select",
  "StartDomainExport",
] as const;

export type SdbAction = (typeof sdbActions)[number];

export function sdb(action: SdbAction | "*"): `sdb:${SdbAction | "*"}` {
  return `sdb:${action}` as `sdb:${SdbAction | "*"}`;
}
