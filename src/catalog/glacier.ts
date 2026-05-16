export const glacierActions = [
  "AbortMultipartUpload",
  "AbortVaultLock",
  "AddTagsToVault",
  "CompleteMultipartUpload",
  "CompleteVaultLock",
  "CreateVault",
  "DeleteArchive",
  "DeleteVault",
  "DeleteVaultAccessPolicy",
  "DeleteVaultNotifications",
  "DescribeJob",
  "DescribeVault",
  "GetDataRetrievalPolicy",
  "GetJobOutput",
  "GetVaultAccessPolicy",
  "GetVaultLock",
  "GetVaultNotifications",
  "InitiateJob",
  "InitiateMultipartUpload",
  "InitiateVaultLock",
  "ListJobs",
  "ListMultipartUploads",
  "ListParts",
  "ListProvisionedCapacity",
  "ListTagsForVault",
  "ListVaults",
  "PurchaseProvisionedCapacity",
  "RemoveTagsFromVault",
  "SetDataRetrievalPolicy",
  "SetVaultAccessPolicy",
  "SetVaultNotifications",
  "UploadArchive",
  "UploadMultipartPart",
] as const;

export type GlacierAction = (typeof glacierActions)[number];

export function glacier(action: GlacierAction | "*"): `glacier:${GlacierAction | "*"}` {
  return `glacier:${action}` as `glacier:${GlacierAction | "*"}`;
}
