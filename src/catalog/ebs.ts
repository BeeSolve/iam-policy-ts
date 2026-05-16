export const ebsActions = [
  "CompleteSnapshot",
  "GetSnapshotBlock",
  "ListChangedBlocks",
  "ListSnapshotBlocks",
  "PutSnapshotBlock",
  "StartSnapshot",
] as const;

export type EbsAction = (typeof ebsActions)[number];

export function ebs(action: EbsAction | "*"): `ebs:${EbsAction | "*"}` {
  return `ebs:${action}` as `ebs:${EbsAction | "*"}`;
}
