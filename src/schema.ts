import * as v from "valibot";

const nonEmptyString = v.pipe(v.string(), v.nonEmpty());
const nonEmptyStringListSchema = v.union([
  nonEmptyString,
  v.pipe(v.array(nonEmptyString), v.minLength(1)),
]);
const policyScalarSchema = v.union([v.string(), v.number(), v.boolean()]);
const policyScalarListSchema = v.union([
  policyScalarSchema,
  v.pipe(v.array(policyScalarSchema), v.minLength(1)),
]);
const policyPrincipalMapSchema = v.record(
  nonEmptyString,
  nonEmptyStringListSchema,
);
const policyPrincipalSchema = v.union([
  v.literal("*"),
  policyPrincipalMapSchema,
]);
const policyConditionBlockSchema = v.record(
  nonEmptyString,
  v.record(nonEmptyString, policyScalarListSchema),
);

export const iamPolicyStatementSchema = v.strictObject({
  Sid: v.optional(nonEmptyString),
  Effect: v.picklist(["Allow", "Deny"]),
  Action: v.optional(nonEmptyStringListSchema),
  NotAction: v.optional(nonEmptyStringListSchema),
  Resource: v.optional(nonEmptyStringListSchema),
  NotResource: v.optional(nonEmptyStringListSchema),
  Principal: v.optional(policyPrincipalSchema),
  NotPrincipal: v.optional(policyPrincipalSchema),
  Condition: v.optional(policyConditionBlockSchema),
});

export const iamPolicyDocumentSchema = v.strictObject({
  Version: v.optional(v.picklist(["2008-10-17", "2012-10-17"])),
  Id: v.optional(nonEmptyString),
  Statement: v.union([
    iamPolicyStatementSchema,
    v.pipe(v.array(iamPolicyStatementSchema), v.minLength(1)),
  ]),
});

export type IamPolicyVersion = v.InferOutput<
  typeof iamPolicyDocumentSchema
>["Version"];
export type IamPolicyScalar = v.InferOutput<typeof policyScalarSchema>;
export type IamPolicyScalarList = v.InferOutput<typeof policyScalarListSchema>;
export type IamPolicyStringList = v.InferOutput<typeof nonEmptyStringListSchema>;
export type IamPolicyPrincipalMap = v.InferOutput<
  typeof policyPrincipalMapSchema
>;
export type IamPolicyPrincipal = v.InferOutput<typeof policyPrincipalSchema>;
export type IamPolicyConditionBlock = v.InferOutput<
  typeof policyConditionBlockSchema
>;
export type IamPolicyStatement = v.InferOutput<typeof iamPolicyStatementSchema>;
export type IamPolicyDocument = v.InferOutput<typeof iamPolicyDocumentSchema>;

/**
 * Type guard: checks if a value is a valid IAM policy document.
 */
export function isIamPolicyDocument(
  value: unknown,
): value is IamPolicyDocument {
  return v.safeParse(iamPolicyDocumentSchema, value).success;
}

/**
 * Type guard: checks if a value is a valid IAM policy statement.
 */
export function isIamPolicyStatement(
  value: unknown,
): value is IamPolicyStatement {
  return v.safeParse(iamPolicyStatementSchema, value).success;
}

/**
 * Parses and validates a value as an IAM policy document.
 * Throws a ValiError if validation fails.
 */
export function assertIamPolicyDocument(value: unknown): IamPolicyDocument {
  return v.parse(iamPolicyDocumentSchema, value);
}

/**
 * Strict IAM policy statement schema that enforces grammar rules:
 * - Must have exactly one of Action or NotAction
 * - Must have exactly one of Resource or NotResource (for identity-based policies)
 * - Cannot have both Action and NotAction
 * - Cannot have both Resource and NotResource
 */
export const iamPolicyStatementStrictSchema = v.pipe(
  iamPolicyStatementSchema,
  v.check(
    (statement) => {
      const hasAction = statement.Action != null;
      const hasNotAction = statement.NotAction != null;
      if (hasAction && hasNotAction) return false;
      if (!hasAction && !hasNotAction) return false;
      return true;
    },
    "Statement must have exactly one of Action or NotAction.",
  ),
  v.check(
    (statement) => {
      const hasResource = statement.Resource != null;
      const hasNotResource = statement.NotResource != null;
      if (hasResource && hasNotResource) return false;
      return true;
    },
    "Statement cannot have both Resource and NotResource.",
  ),
);

/**
 * Strict IAM policy document schema that enforces grammar rules on each statement.
 */
export const iamPolicyDocumentStrictSchema = v.strictObject({
  Version: v.optional(v.picklist(["2008-10-17", "2012-10-17"])),
  Id: v.optional(nonEmptyString),
  Statement: v.union([
    iamPolicyStatementStrictSchema,
    v.pipe(v.array(iamPolicyStatementStrictSchema), v.minLength(1)),
  ]),
});

export type IamPolicyStatementStrict = v.InferOutput<
  typeof iamPolicyStatementStrictSchema
>;
export type IamPolicyDocumentStrict = v.InferOutput<
  typeof iamPolicyDocumentStrictSchema
>;

/**
 * Type guard: checks if a value is a valid IAM policy document
 * with strict grammar enforcement.
 */
export function isIamPolicyDocumentStrict(
  value: unknown,
): value is IamPolicyDocumentStrict {
  return v.safeParse(iamPolicyDocumentStrictSchema, value).success;
}

/**
 * Parses and validates a value as an IAM policy document with strict grammar rules.
 * Throws a ValiError if validation fails.
 */
export function assertIamPolicyDocumentStrict(
  value: unknown,
): IamPolicyDocumentStrict {
  return v.parse(iamPolicyDocumentStrictSchema, value);
}
