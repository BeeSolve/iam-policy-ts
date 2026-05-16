export const elementalActivationsActions = [
  "CompleteAccountRegistration",
  "CompleteFileUpload",
  "ConfirmAccount",
  "DownloadKickstart",
  "DownloadSoftware",
  "GenerateLicense",
  "GenerateLicenses",
  "GetArtifactGroupSoftwareVersions",
  "GetAsset",
  "GetAssets",
  "GetProductAdvisories",
  "GetSoftwareVersions",
  "StartFileUpload",
] as const;

export type ElementalActivationsAction = (typeof elementalActivationsActions)[number];

export function elementalActivations(action: ElementalActivationsAction | "*"): `elemental-activations:${ElementalActivationsAction | "*"}` {
  return `elemental-activations:${action}` as `elemental-activations:${ElementalActivationsAction | "*"}`;
}
