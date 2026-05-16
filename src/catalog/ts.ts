export const tsActions = [
  "GetExecution",
  "GetExecutionOutput",
  "GetTool",
  "ListExecutions",
  "ListTagsForResource",
  "ListTools",
  "StartExecution",
  "TagResource",
  "UntagResource",
] as const;

export type TsAction = (typeof tsActions)[number];

export function ts(action: TsAction | "*"): `ts:${TsAction | "*"}` {
  return `ts:${action}` as `ts:${TsAction | "*"}`;
}
