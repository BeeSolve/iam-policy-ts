export const medicalImagingActions = [
  "CopyImageSet",
  "CreateDatastore",
  "DeleteDatastore",
  "DeleteImageSet",
  "GetDatastore",
  "GetDICOMBulkdata",
  "GetDICOMImportJob",
  "GetDICOMInstance",
  "GetDICOMInstanceFrames",
  "GetDICOMInstanceMetadata",
  "GetDICOMSeriesMetadata",
  "GetImageFrame",
  "GetImageSet",
  "GetImageSetMetadata",
  "ListDatastores",
  "ListDICOMImportJobs",
  "ListImageSetVersions",
  "ListTagsForResource",
  "SearchDICOMInstances",
  "SearchDICOMSeries",
  "SearchDICOMStudies",
  "SearchImageSets",
  "StartDICOMImportJob",
  "StoreDICOM",
  "StoreDICOMStudy",
  "TagResource",
  "UntagResource",
  "UpdateImageSetMetadata",
] as const;

export type MedicalImagingAction = (typeof medicalImagingActions)[number];

export function medicalImaging(action: MedicalImagingAction | "*"): `medical-imaging:${MedicalImagingAction | "*"}` {
  return `medical-imaging:${action}` as `medical-imaging:${MedicalImagingAction | "*"}`;
}
