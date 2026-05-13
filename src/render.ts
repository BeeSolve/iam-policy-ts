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

type RenderProps = { indentLevel: number; parentPropertyName: string | undefined };

const typeRenderers: Record<
  string,
  (value: never, props: RenderProps) => string
> = {
  string: (value, props) => renderStringValue(value as string, props),
  number: (value) => JSON.stringify(value),
  boolean: (value) => JSON.stringify(value),
};

function renderValue(value: unknown, props: RenderProps): string {
  if (value === null) return "null";
  if (value === undefined) return "undefined";

  const typeRenderer = typeRenderers[typeof value];
  if (typeRenderer) return typeRenderer(value as never, props);

  if (Array.isArray(value)) return renderArray(value, props);
  if (isRecord(value)) return renderObject(value, props);

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

function parseActionParts(
  value: string,
): { servicePrefix: string; actionName: string } | null {
  const separatorIndex = value.indexOf(":");
  if (separatorIndex <= 0 || separatorIndex === value.length - 1) return null;
  return {
    servicePrefix: value.slice(0, separatorIndex),
    actionName: value.slice(separatorIndex + 1),
  };
}

function isKnownAction(servicePrefix: string, actionName: string): boolean {
  const knownActions = (
    iamActionCatalog as Record<string, readonly string[] | undefined>
  )[servicePrefix];
  return knownActions != null && knownActions.includes(actionName);
}

function renderActionString(value: string): string {
  const parts = parseActionParts(value);
  if (parts == null || !isKnownAction(parts.servicePrefix, parts.actionName)) {
    return JSON.stringify(value);
  }

  const accessor = isIdentifierSafe(parts.servicePrefix)
    ? `iam.${parts.servicePrefix}`
    : `iam[${JSON.stringify(parts.servicePrefix)}]`;

  return `${accessor}(${JSON.stringify(parts.actionName)})`;
}

function renderArray(
  value: unknown[],
  props: RenderProps,
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
  props: RenderProps,
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
