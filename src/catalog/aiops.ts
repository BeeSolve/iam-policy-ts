export const aiopsActions = [
  "CreateInvestigation",
  "CreateInvestigationEvent",
  "CreateInvestigationGroup",
  "CreateInvestigationResource",
  "CreateReport",
  "DeleteInvestigation",
  "DeleteInvestigationGroup",
  "DeleteInvestigationGroupPolicy",
  "GenerateReport",
  "GetEphemeralInvestigationResults",
  "GetFact",
  "GetFactVersions",
  "GetInvestigation",
  "GetInvestigationEvent",
  "GetInvestigationGroup",
  "GetInvestigationGroupPolicy",
  "GetInvestigationResource",
  "GetReport",
  "ListFacts",
  "ListInvestigationEvents",
  "ListInvestigationGroups",
  "ListInvestigations",
  "ListReports",
  "ListTagsForResource",
  "PutFact",
  "PutInvestigationGroupPolicy",
  "TagResource",
  "UntagResource",
  "UpdateInvestigation",
  "UpdateInvestigationEvent",
  "UpdateInvestigationGroup",
  "UpdateReport",
  "ValidateInvestigationGroup",
] as const;

export type AiopsAction = (typeof aiopsActions)[number];

export function aiops(action: AiopsAction | "*"): `aiops:${AiopsAction | "*"}` {
  return `aiops:${action}` as `aiops:${AiopsAction | "*"}`;
}
