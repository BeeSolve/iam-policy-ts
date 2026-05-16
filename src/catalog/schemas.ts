export const schemasActions = [
  "CreateDiscoverer",
  "CreateRegistry",
  "CreateSchema",
  "DeleteDiscoverer",
  "DeleteRegistry",
  "DeleteResourcePolicy",
  "DeleteSchema",
  "DeleteSchemaVersion",
  "DescribeCodeBinding",
  "DescribeDiscoverer",
  "DescribeRegistry",
  "DescribeSchema",
  "ExportSchema",
  "GetCodeBindingSource",
  "GetDiscoveredSchema",
  "GetResourcePolicy",
  "ListDiscoverers",
  "ListRegistries",
  "ListSchemas",
  "ListSchemaVersions",
  "ListTagsForResource",
  "PutCodeBinding",
  "PutResourcePolicy",
  "SearchSchemas",
  "StartDiscoverer",
  "StopDiscoverer",
  "TagResource",
  "UntagResource",
  "UpdateDiscoverer",
  "UpdateRegistry",
  "UpdateSchema",
] as const;

export type SchemasAction = (typeof schemasActions)[number];

export function schemas(action: SchemasAction | "*"): `schemas:${SchemasAction | "*"}` {
  return `schemas:${action}` as `schemas:${SchemasAction | "*"}`;
}
