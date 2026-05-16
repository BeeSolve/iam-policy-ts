export const pipesActions = [
  "CreatePipe",
  "DeletePipe",
  "DescribePipe",
  "ListPipes",
  "ListTagsForResource",
  "StartPipe",
  "StopPipe",
  "TagResource",
  "UntagResource",
  "UpdatePipe",
] as const;

export type PipesAction = (typeof pipesActions)[number];

export function pipes(action: PipesAction | "*"): `pipes:${PipesAction | "*"}` {
  return `pipes:${action}` as `pipes:${PipesAction | "*"}`;
}
