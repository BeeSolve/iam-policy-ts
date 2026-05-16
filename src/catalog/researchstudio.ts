export const researchstudioActions = [
  "AssignPrincipal",
  "CreateApplication",
  "DeleteApplication",
  "DeletePrincipal",
  "GetApplication",
  "ListApplications",
] as const;

export type ResearchstudioAction = (typeof researchstudioActions)[number];

export function researchstudio(action: ResearchstudioAction | "*"): `researchstudio:${ResearchstudioAction | "*"}` {
  return `researchstudio:${action}` as `researchstudio:${ResearchstudioAction | "*"}`;
}
