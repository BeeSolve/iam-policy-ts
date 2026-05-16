export const dlmActions = [
  "CreateLifecyclePolicy",
  "DeleteLifecyclePolicy",
  "GetLifecyclePolicies",
  "GetLifecyclePolicy",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateLifecyclePolicy",
] as const;

export type DlmAction = (typeof dlmActions)[number];

export function dlm(action: DlmAction | "*"): `dlm:${DlmAction | "*"}` {
  return `dlm:${action}` as `dlm:${DlmAction | "*"}`;
}
