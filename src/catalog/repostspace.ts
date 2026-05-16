export const repostspaceActions = [
  "BatchAddChannelRoleToAccessors",
  "BatchAddRole",
  "BatchRemoveChannelRoleFromAccessors",
  "BatchRemoveRole",
  "CreateChannel",
  "CreateSpace",
  "DeleteSpace",
  "DeregisterAdmin",
  "GetChannel",
  "GetSpace",
  "ListChannels",
  "ListSpaces",
  "ListTagsForResource",
  "RegisterAdmin",
  "SendInvites",
  "TagResource",
  "UntagResource",
  "UpdateChannel",
  "UpdateSpace",
] as const;

export type RepostspaceAction = (typeof repostspaceActions)[number];

export function repostspace(action: RepostspaceAction | "*"): `repostspace:${RepostspaceAction | "*"}` {
  return `repostspace:${action}` as `repostspace:${RepostspaceAction | "*"}`;
}
