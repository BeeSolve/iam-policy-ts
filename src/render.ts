import { iamActionCatalog } from "./catalog.js";
import type { IamPolicyDocument } from "./schema.js";

/**
 * Renders an IAM policy document as TypeScript source code using `iam.*` helpers
 * for known actions. Unknown actions are rendered as plain string literals.
 *
 * @example
 * const ts = policyToTypescript({
 *   Version: "2012-10-17",
 *   Statement: [{
 *     Effect: "Allow",
 *     Action: ["s3:GetObject", "s3:ListBucket"],
 *     Resource: "*",
 *   }],
 * });
 * // Returns TypeScript source with iam.s3("GetObject"), iam.s3("ListBucket"), etc.
 */
export function policyToTypescript(
  policy: IamPolicyDocument,
  options?: { indentLevel?: number },
): string {
  const indentLevel = options?.indentLevel ?? 0;
  return renderValue(policy, { indentLevel, parentPropertyName: undefined });
}

function renderValue(
  value: unknown,
  props: { indentLevel: number; parentPropertyName: string | undefined },
): string {
  if (value === null) {
    return "null";
  }
  if (value === undefined) {
    return "undefined";
  }
  if (typeof value === "string") {
    return renderStringValue(value, props);
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return renderArray(value, props);
  }
  if (isRecord(value)) {
    return renderObject(value, props);
  }
  return JSON.stringify(value);
}

function renderStringValue(
  value: string,
  props: { parentPropertyName: string | undefined },
): string {
  if (
    props.parentPropertyName === "Action" ||
    props.parentPropertyName === "NotAction"
  ) {
    return renderActionString(value);
  }
  return JSON.stringify(value);
}

function renderActionString(value: string): string {
  const separatorIndex = value.indexOf(":");
  if (separatorIndex <= 0 || separatorIndex === value.length - 1) {
    return JSON.stringify(value);
  }

  const servicePrefix = value.slice(0, separatorIndex);
  const actionName = value.slice(separatorIndex + 1);
  const knownActions = (
    iamActionCatalog as Record<string, readonly string[] | undefined>
  )[servicePrefix];
  if (knownActions == null || !knownActions.includes(actionName)) {
    return JSON.stringify(value);
  }

  if (isIdentifierSafe(servicePrefix)) {
    return `iam.${servicePrefix}(${JSON.stringify(actionName)})`;
  }
  return `iam[${JSON.stringify(servicePrefix)}](${JSON.stringify(actionName)})`;
}

function renderArray(
  value: unknown[],
  props: { indentLevel: number; parentPropertyName: string | undefined },
): string {
  if (value.length === 0) {
    return "[]";
  }

  const indent = "  ".repeat(props.indentLevel);
  const childIndent = "  ".repeat(props.indentLevel + 1);
  const renderedItems = value.map((item) =>
    renderValue(item, {
      indentLevel: props.indentLevel + 1,
      parentPropertyName: props.parentPropertyName,
    }),
  );

  return `[\n${renderedItems.map((item) => `${childIndent}${item}`).join(",\n")}\n${indent}]`;
}

function renderObject(
  value: Record<string, unknown>,
  props: { indentLevel: number; parentPropertyName: string | undefined },
): string {
  const entries = Object.entries(value).filter(
    ([, entryValue]) => entryValue !== undefined,
  );
  if (entries.length === 0) {
    return "{}";
  }

  const indent = "  ".repeat(props.indentLevel);
  const childIndent = "  ".repeat(props.indentLevel + 1);
  const renderedEntries = entries.map(([key, entryValue]) => {
    const renderedValue = renderValue(entryValue, {
      indentLevel: props.indentLevel + 1,
      parentPropertyName: key,
    });
    return `${childIndent}${renderObjectKey(key)}: ${renderedValue}`;
  });

  return `{\n${renderedEntries.join(",\n")}\n${indent}}`;
}

function renderObjectKey(value: string): string {
  return isIdentifierSafe(value) ? value : JSON.stringify(value);
}

function isIdentifierSafe(value: string): boolean {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/u.test(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return (
    value != null && typeof value === "object" && Array.isArray(value) === false
  );
}
