export const rbinActions = [
  "CreateRule",
  "DeleteRule",
  "GetRule",
  "ListRules",
  "ListTagsForResource",
  "LockRule",
  "TagResource",
  "UnlockRule",
  "UntagResource",
  "UpdateRule",
] as const;

export type RbinAction = (typeof rbinActions)[number];

export function rbin(action: RbinAction | "*"): `rbin:${RbinAction | "*"}` {
  return `rbin:${action}` as `rbin:${RbinAction | "*"}`;
}
