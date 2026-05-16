export const sagemakerGeospatialActions = [
  "DeleteEarthObservationJob",
  "DeleteVectorEnrichmentJob",
  "ExportEarthObservationJob",
  "ExportVectorEnrichmentJob",
  "GetEarthObservationJob",
  "GetRasterDataCollection",
  "GetTile",
  "GetVectorEnrichmentJob",
  "ListEarthObservationJobs",
  "ListRasterDataCollections",
  "ListTagsForResource",
  "ListVectorEnrichmentJobs",
  "SearchRasterDataCollection",
  "StartEarthObservationJob",
  "StartVectorEnrichmentJob",
  "StopEarthObservationJob",
  "StopVectorEnrichmentJob",
  "TagResource",
  "UntagResource",
] as const;

export type SagemakerGeospatialAction = (typeof sagemakerGeospatialActions)[number];

export function sagemakerGeospatial(action: SagemakerGeospatialAction | "*"): `sagemaker-geospatial:${SagemakerGeospatialAction | "*"}` {
  return `sagemaker-geospatial:${action}` as `sagemaker-geospatial:${SagemakerGeospatialAction | "*"}`;
}
