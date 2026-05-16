export const vpcLatticeSvcsActions = [
  "Connect",
  "Invoke",
] as const;

export type VpcLatticeSvcsAction = (typeof vpcLatticeSvcsActions)[number];

export function vpcLatticeSvcs(action: VpcLatticeSvcsAction | "*"): `vpc-lattice-svcs:${VpcLatticeSvcsAction | "*"}` {
  return `vpc-lattice-svcs:${action}` as `vpc-lattice-svcs:${VpcLatticeSvcsAction | "*"}`;
}
