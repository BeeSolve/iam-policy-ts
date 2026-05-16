export const rolesanywhereActions = [
  "CreateProfile",
  "CreateTrustAnchor",
  "DeleteAttributeMapping",
  "DeleteCrl",
  "DeleteProfile",
  "DeleteTrustAnchor",
  "DisableCrl",
  "DisableProfile",
  "DisableTrustAnchor",
  "EnableCrl",
  "EnableProfile",
  "EnableTrustAnchor",
  "GetCrl",
  "GetProfile",
  "GetSubject",
  "GetTrustAnchor",
  "ImportCrl",
  "ListCrls",
  "ListProfiles",
  "ListSubjects",
  "ListTagsForResource",
  "ListTrustAnchors",
  "PutAttributeMapping",
  "PutNotificationSettings",
  "ResetNotificationSettings",
  "TagResource",
  "UntagResource",
  "UpdateCrl",
  "UpdateProfile",
  "UpdateTrustAnchor",
] as const;

export type RolesanywhereAction = (typeof rolesanywhereActions)[number];

export function rolesanywhere(action: RolesanywhereAction | "*"): `rolesanywhere:${RolesanywhereAction | "*"}` {
  return `rolesanywhere:${action}` as `rolesanywhere:${RolesanywhereAction | "*"}`;
}
