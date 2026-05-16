export const geoPlacesActions = [
  "Autocomplete",
  "Geocode",
  "GetPlace",
  "ReverseGeocode",
  "SearchNearby",
  "SearchText",
  "Suggest",
] as const;

export type GeoPlacesAction = (typeof geoPlacesActions)[number];

export function geoPlaces(action: GeoPlacesAction | "*"): `geo-places:${GeoPlacesAction | "*"}` {
  return `geo-places:${action}` as `geo-places:${GeoPlacesAction | "*"}`;
}
