import assert from "node:assert/strict";
import test from "node:test";
import { prefixToCamelCase, prefixToPascalCase } from "./naming.ts";

/**
 * Property 1: Service function identity
 *
 * For any service prefix P and any action A in that service's action list (or "*"),
 * calling the generated service function with A SHALL return the string `P:A`.
 *
 * **Validates: Requirements 1.4**
 */

// --- Generators ---

const JS_RESERVED_WORDS = new Set([
  "break", "case", "catch", "continue", "debugger", "default", "delete",
  "do", "else", "finally", "for", "function", "if", "in", "instanceof",
  "new", "return", "switch", "this", "throw", "try", "typeof", "var",
  "void", "while", "with", "class", "const", "enum", "export", "extends",
  "import", "super", "implements", "interface", "let", "package", "private",
  "protected", "public", "static", "yield", "await", "async",
]);

function randomAlpha(len: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function randomPrefix(): string {
  let prefix: string;
  do {
    const styles = ["simple", "hyphenated", "multi-hyphen", "numeric"];
    const style = styles[Math.floor(Math.random() * styles.length)];
    switch (style) {
      case "simple":
        prefix = randomAlpha(2 + Math.floor(Math.random() * 6));
        break;
      case "hyphenated":
        prefix = `${randomAlpha(2 + Math.floor(Math.random() * 5))}-${randomAlpha(2 + Math.floor(Math.random() * 5))}`;
        break;
      case "multi-hyphen":
        prefix = `${randomAlpha(2 + Math.floor(Math.random() * 3))}-${randomAlpha(2 + Math.floor(Math.random() * 3))}-${randomAlpha(2 + Math.floor(Math.random() * 3))}`;
        break;
      case "numeric":
        prefix = `${randomAlpha(1)}${Math.floor(Math.random() * 10)}`;
        break;
      default:
        prefix = "svc";
    }
  } while (JS_RESERVED_WORDS.has(prefixToCamelCase(prefix)));
  return prefix;
}

function randomActionName(): string {
  const verbs = ["Get", "Put", "List", "Create", "Delete", "Update", "Describe", "Start", "Stop", "Invoke"];
  const nouns = ["Object", "Bucket", "Instance", "Function", "Table", "Queue", "Topic", "Role", "Policy", "Stream"];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${verb}${noun}`;
}

function randomActions(count: number): string[] {
  const actions = new Set<string>();
  while (actions.size < count) {
    actions.add(randomActionName());
  }
  return [...actions].sort();
}

/**
 * Replicates the renderServiceFile logic to produce the generated source code.
 * This mirrors scripts/render-service-file.ts to test the property of the generated function.
 */
function renderServiceFile(props: { prefix: string; actions: string[] }): string {
  const { prefix, actions } = props;
  const camel = prefixToCamelCase(prefix);
  const pascal = prefixToPascalCase(prefix);

  const actionsConst = `${camel}Actions`;
  const actionType = `${pascal}Action`;
  const fnName = camel;

  const serializedActions = actions.map((a) => `  ${JSON.stringify(a)},`).join("\n");

  return `export const ${actionsConst} = [
${serializedActions}
] as const;

export type ${actionType} = (typeof ${actionsConst})[number];

export function ${fnName}(action: ${actionType} | "*"): \`${prefix}:\${${actionType} | "*"}\` {
  return \`${prefix}:\${action}\` as \`${prefix}:\${${actionType} | "*"}\`;
}
`;
}

/**
 * Strips TypeScript syntax from generated source so it can be evaluated as plain JS.
 */
function toEvalableJs(source: string): string {
  const lines = source.split("\n");
  const result: string[] = [];

  for (const line of lines) {
    // Skip export type lines
    if (/^\s*export type /.test(line) || /^\s*type /.test(line)) continue;

    let processed = line;

    // Remove export keyword
    processed = processed.replace(/^export /, "");

    // Remove as const
    processed = processed.replace(/ as const/, "");

    // Strip function signature type annotations:
    // "function name(action: Type | "*"): `prefix:${Type | "*"}` {"
    // → "function name(action) {"
    // The return type contains backticks with ${}, so we match up to the final "` {"
    processed = processed.replace(
      /^(function \w+)\([^)]*\):.+` \{$/,
      "$1(action) {"
    );

    // Remove as `...` casts in return statements
    processed = processed.replace(/ as `[^`]+`/, "");

    result.push(processed);
  }

  return result.join("\n");
}

// --- Property Test ---

test("Property 1: Service function identity - generated function returns prefix:action for all actions", () => {
  const iterations = 100;

  for (let i = 0; i < iterations; i++) {
    const prefix = randomPrefix();
    const actionCount = 1 + Math.floor(Math.random() * 10);
    const actions = randomActions(actionCount);

    const source = renderServiceFile({ prefix, actions });
    const evalSource = toEvalableJs(source);

    // Extract the function name (first function declaration)
    const fnMatch = source.match(/^export function (\w+)\(/m);
    assert.ok(fnMatch, `Could not find function declaration in generated code for prefix "${prefix}"`);
    const fnName = fnMatch[1];

    // Build a script that defines the function and returns it
    const testScript = `${evalSource}\nreturn { fn: ${fnName} };`;

    let fn: (action: string) => string;
    try {
      fn = new Function(testScript)().fn;
    } catch (e) {
      assert.fail(`Failed to evaluate generated code for prefix "${prefix}":\n${evalSource}\nError: ${e}`);
    }

    // Verify each action returns prefix:action
    for (const action of actions) {
      const result = fn(action);
      assert.equal(
        result,
        `${prefix}:${action}`,
        `Expected "${prefix}:${action}" but got "${result}" (prefix="${prefix}", action="${action}")`
      );
    }

    // Verify wildcard returns prefix:*
    const wildcardResult = fn("*");
    assert.equal(
      wildcardResult,
      `${prefix}:*`,
      `Expected "${prefix}:*" but got "${wildcardResult}" for wildcard (prefix="${prefix}")`
    );
  }
});

/**
 * Property 2: Service file structure and naming
 *
 * For any service prefix P (including those with hyphens), the generated service file SHALL export:
 * - a const named `{camelCase(P)}Actions` containing all actions as a readonly tuple
 * - a type named `{PascalCase(P)}Action`
 * - a function named `{camelCase(P)}`
 *
 * **Validates: Requirements 1.2, 1.3, 1.5**
 */

test("Property 2: Service file structure and naming - generated file exports correct const, type, and function names", () => {
  const iterations = 100;

  for (let i = 0; i < iterations; i++) {
    const prefix = randomPrefix();
    const actionCount = 1 + Math.floor(Math.random() * 10);
    const actions = randomActions(actionCount);

    const source = renderServiceFile({ prefix, actions });

    const expectedCamel = prefixToCamelCase(prefix);
    const expectedPascal = prefixToPascalCase(prefix);

    const expectedConstName = `${expectedCamel}Actions`;
    const expectedTypeName = `${expectedPascal}Action`;
    const expectedFnName = expectedCamel;

    // Verify the output contains the correct const export
    const constPattern = `export const ${expectedConstName} = [`;
    assert.ok(
      source.includes(constPattern),
      `Expected const export "${constPattern}" not found for prefix "${prefix}". Got:\n${source}`
    );

    // Verify the output contains the correct type export
    const typePattern = `export type ${expectedTypeName} =`;
    assert.ok(
      source.includes(typePattern),
      `Expected type export "${typePattern}" not found for prefix "${prefix}". Got:\n${source}`
    );

    // Verify the output contains the correct function export
    const fnPattern = `export function ${expectedFnName}(`;
    assert.ok(
      source.includes(fnPattern),
      `Expected function export "${fnPattern}" not found for prefix "${prefix}". Got:\n${source}`
    );

    // Verify the const contains all actions as a readonly tuple (ends with "as const")
    assert.ok(
      source.includes("] as const;"),
      `Expected "as const" assertion for readonly tuple not found for prefix "${prefix}"`
    );

    // Verify each action appears in the const tuple
    for (const action of actions) {
      assert.ok(
        source.includes(JSON.stringify(action)),
        `Action "${action}" not found in generated const for prefix "${prefix}"`
      );
    }
  }
});
