export const signerActions = [
  "AddProfilePermission",
  "CancelSigningProfile",
  "DescribeSigningJob",
  "GetRevocationStatus",
  "GetSigningPlatform",
  "GetSigningProfile",
  "ListProfilePermissions",
  "ListSigningJobs",
  "ListSigningPlatforms",
  "ListSigningProfiles",
  "ListTagsForResource",
  "PutSigningProfile",
  "RemoveProfilePermission",
  "RevokeSignature",
  "RevokeSigningProfile",
  "SignPayload",
  "StartSigningJob",
  "TagResource",
  "UntagResource",
] as const;

export type SignerAction = (typeof signerActions)[number];

export function signer(action: SignerAction | "*"): `signer:${SignerAction | "*"}` {
  return `signer:${action}` as `signer:${SignerAction | "*"}`;
}
