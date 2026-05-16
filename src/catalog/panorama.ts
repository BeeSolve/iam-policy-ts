export const panoramaActions = [
  "CreateApplicationInstance",
  "CreateJobForDevices",
  "CreateNodeFromTemplateJob",
  "CreatePackage",
  "CreatePackageImportJob",
  "DeleteDevice",
  "DeletePackage",
  "DeregisterPackageVersion",
  "DescribeApplicationInstance",
  "DescribeApplicationInstanceDetails",
  "DescribeDevice",
  "DescribeDeviceJob",
  "DescribeNode",
  "DescribeNodeFromTemplateJob",
  "DescribePackage",
  "DescribePackageImportJob",
  "DescribePackageVersion",
  "DescribeSoftware",
  "GetWebSocketURL",
  "ListApplicationInstanceDependencies",
  "ListApplicationInstanceNodeInstances",
  "ListApplicationInstances",
  "ListDevices",
  "ListDevicesJobs",
  "ListNodeFromTemplateJobs",
  "ListNodes",
  "ListPackageImportJobs",
  "ListPackages",
  "ListTagsForResource",
  "ProvisionDevice",
  "RegisterPackageVersion",
  "RemoveApplicationInstance",
  "SignalApplicationInstanceNodeInstances",
  "TagResource",
  "UntagResource",
  "UpdateDeviceMetadata",
] as const;

export type PanoramaAction = (typeof panoramaActions)[number];

export function panorama(action: PanoramaAction | "*"): `panorama:${PanoramaAction | "*"}` {
  return `panorama:${action}` as `panorama:${PanoramaAction | "*"}`;
}
