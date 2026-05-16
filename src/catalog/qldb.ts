export const qldbActions = [
  "CancelJournalKinesisStream",
  "CreateLedger",
  "DeleteLedger",
  "DescribeJournalKinesisStream",
  "DescribeJournalS3Export",
  "DescribeLedger",
  "ExecuteStatement",
  "ExportJournalToS3",
  "GetBlock",
  "GetDigest",
  "GetRevision",
  "InsertSampleData",
  "ListJournalKinesisStreamsForLedger",
  "ListJournalS3Exports",
  "ListJournalS3ExportsForLedger",
  "ListLedgers",
  "ListTagsForResource",
  "PartiQLCreateIndex",
  "PartiQLCreateTable",
  "PartiQLDelete",
  "PartiQLDropIndex",
  "PartiQLDropTable",
  "PartiQLHistoryFunction",
  "PartiQLInsert",
  "PartiQLRedact",
  "PartiQLSelect",
  "PartiQLUndropTable",
  "PartiQLUpdate",
  "SendCommand",
  "ShowCatalog",
  "StreamJournalToKinesis",
  "TagResource",
  "UntagResource",
  "UpdateLedger",
  "UpdateLedgerPermissionsMode",
] as const;

export type QldbAction = (typeof qldbActions)[number];

export function qldb(action: QldbAction | "*"): `qldb:${QldbAction | "*"}` {
  return `qldb:${action}` as `qldb:${QldbAction | "*"}`;
}
