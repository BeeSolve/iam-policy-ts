export const dbqmsActions = [
  "CreateFavoriteQuery",
  "CreateQueryHistory",
  "CreateTab",
  "DeleteFavoriteQueries",
  "DeleteQueryHistory",
  "DeleteTab",
  "DescribeFavoriteQueries",
  "DescribeQueryHistory",
  "DescribeTabs",
  "GetQueryString",
  "UpdateFavoriteQuery",
  "UpdateQueryHistory",
  "UpdateTab",
] as const;

export type DbqmsAction = (typeof dbqmsActions)[number];

export function dbqms(action: DbqmsAction | "*"): `dbqms:${DbqmsAction | "*"}` {
  return `dbqms:${action}` as `dbqms:${DbqmsAction | "*"}`;
}
