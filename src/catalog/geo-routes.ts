export const geoRoutesActions = [
  "CalculateIsolines",
  "CalculateRouteMatrix",
  "CalculateRoutes",
  "OptimizeWaypoints",
  "SnapToRoads",
] as const;

export type GeoRoutesAction = (typeof geoRoutesActions)[number];

export function geoRoutes(action: GeoRoutesAction | "*"): `geo-routes:${GeoRoutesAction | "*"}` {
  return `geo-routes:${action}` as `geo-routes:${GeoRoutesAction | "*"}`;
}
