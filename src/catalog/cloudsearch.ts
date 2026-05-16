export const cloudsearchActions = [
  "AddTags",
  "BuildSuggesters",
  "CreateDomain",
  "DefineAnalysisScheme",
  "DefineExpression",
  "DefineIndexField",
  "DefineSuggester",
  "DeleteAnalysisScheme",
  "DeleteDomain",
  "DeleteExpression",
  "DeleteIndexField",
  "DeleteSuggester",
  "DescribeAnalysisSchemes",
  "DescribeAvailabilityOptions",
  "DescribeDomainEndpointOptions",
  "DescribeDomains",
  "DescribeExpressions",
  "DescribeIndexFields",
  "DescribeScalingParameters",
  "DescribeServiceAccessPolicies",
  "DescribeSuggesters",
  "document",
  "IndexDocuments",
  "ListDomainNames",
  "ListTags",
  "RemoveTags",
  "search",
  "suggest",
  "UpdateAvailabilityOptions",
  "UpdateDomainEndpointOptions",
  "UpdateScalingParameters",
  "UpdateServiceAccessPolicies",
] as const;

export type CloudsearchAction = (typeof cloudsearchActions)[number];

export function cloudsearch(action: CloudsearchAction | "*"): `cloudsearch:${CloudsearchAction | "*"}` {
  return `cloudsearch:${action}` as `cloudsearch:${CloudsearchAction | "*"}`;
}
