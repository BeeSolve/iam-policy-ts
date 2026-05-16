export const resourceGroupsActions = [
  "AssociateResource",
  "CancelTagSyncTask",
  "CreateGroup",
  "DeleteGroup",
  "DeleteGroupPolicy",
  "DisassociateResource",
  "GetAccountSettings",
  "GetGroup",
  "GetGroupConfiguration",
  "GetGroupPolicy",
  "GetGroupQuery",
  "GetTags",
  "GetTagSyncTask",
  "GroupResources",
  "ListGroupingStatuses",
  "ListGroupResources",
  "ListGroups",
  "ListResourceTypes",
  "ListTagSyncTasks",
  "PutGroupConfiguration",
  "PutGroupPolicy",
  "SearchResources",
  "StartTagSyncTask",
  "Tag",
  "UngroupResources",
  "Untag",
  "UpdateAccountSettings",
  "UpdateGroup",
  "UpdateGroupQuery",
] as const;

export type ResourceGroupsAction = (typeof resourceGroupsActions)[number];

export function resourceGroups(action: ResourceGroupsAction | "*"): `resource-groups:${ResourceGroupsAction | "*"}` {
  return `resource-groups:${action}` as `resource-groups:${ResourceGroupsAction | "*"}`;
}
