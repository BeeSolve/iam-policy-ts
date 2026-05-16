export const geoMapsActions = [
  "GetStaticMap",
  "GetTile",
] as const;

export type GeoMapsAction = (typeof geoMapsActions)[number];

export function geoMaps(action: GeoMapsAction | "*"): `geo-maps:${GeoMapsAction | "*"}` {
  return `geo-maps:${action}` as `geo-maps:${GeoMapsAction | "*"}`;
}
