export const route53profilesActions = [
  "AssociateProfile",
  "AssociateResourceToProfile",
  "CreateProfile",
  "DeleteProfile",
  "DisassociateProfile",
  "DisassociateResourceFromProfile",
  "GetProfile",
  "GetProfileAssociation",
  "GetProfilePolicy",
  "GetProfileResourceAssociation",
  "ListProfileAssociations",
  "ListProfileResourceAssociations",
  "ListProfiles",
  "ListTagsForResource",
  "PutProfilePolicy",
  "TagResource",
  "UntagResource",
  "UpdateProfileResourceAssociation",
] as const;

export type Route53profilesAction = (typeof route53profilesActions)[number];

export function route53profiles(action: Route53profilesAction | "*"): `route53profiles:${Route53profilesAction | "*"}` {
  return `route53profiles:${action}` as `route53profiles:${Route53profilesAction | "*"}`;
}
