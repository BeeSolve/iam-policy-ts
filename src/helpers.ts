import { iamActionCatalog } from "./catalog.js";

export type IamActionCatalog = typeof iamActionCatalog;
export type IamPolicyServicePrefix = keyof IamActionCatalog;
export type IamPolicyActionNameByService<
  TService extends IamPolicyServicePrefix,
> = IamActionCatalog[TService][number];
export type IamPolicyActionForService<TService extends IamPolicyServicePrefix> =
  `${TService}:${IamPolicyActionNameByService<TService> | "*"}`;

export type IamHelperObject = {
  [K in IamPolicyServicePrefix]: (
    action: IamPolicyActionNameByService<K> | "*",
  ) => IamPolicyActionForService<K>;
};

/**
 * Builds a fully qualified IAM action string with service-scoped autocomplete.
 *
 * @example
 * iamAction("s3", "GetObject")    // "s3:GetObject"
 * iamAction("kms", "Decrypt")     // "kms:Decrypt"
 */
export function iamAction<TService extends IamPolicyServicePrefix>(
  service: TService,
  action: IamPolicyActionNameByService<TService> | "*",
): IamPolicyActionForService<TService> {
  return `${service}:${action}` as IamPolicyActionForService<TService>;
}
