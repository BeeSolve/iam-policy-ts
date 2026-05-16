import assert from "node:assert/strict";
import test from "node:test";
import { prefixToCamelCase, prefixToPascalCase } from "./naming.ts";
import { renderBarrelFile } from "./render-barrel-file.ts";
import { renderMetaFile } from "./render-meta-file.ts";

/**
 * Property 7: ESM specifier compliance
 *
 * For any generated TypeScript file (service file, barrel, or meta file), all `import`
 * and `export` specifiers SHALL end with the `.js` extension.
 *
 * **Validates: Requirements 7.5**
 */

// --- Generators ---

function randomAlpha(len: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function randomPrefix(): string {
  const styles = ["simple", "hyphenated", "multi-hyphen", "numeric"];
  const style = styles[Math.floor(Math.random() * styles.length)];
  switch (style) {
    case "simple":
      return randomAlpha(2 + Math.floor(Math.random() * 6));
    case "hyphenated":
      return `${randomAlpha(2 + Math.floor(Math.random() * 5))}-${randomAlpha(2 + Math.floor(Math.random() * 5))}`;
    case "multi-hyphen":
      return `${randomAlpha(2 + Math.floor(Math.random() * 3))}-${randomAlpha(2 + Math.floor(Math.random() * 3))}-${randomAlpha(2 + Math.floor(Math.random() * 3))}`;
    case "numeric":
      return `${randomAlpha(1)}${Math.floor(Math.random() * 10)}`;
    default:
      return "svc";
  }
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

function randomUniquePrefixes(count: number): string[] {
  const prefixes = new Set<string>();
  let attempts = 0;
  while (prefixes.size < count && attempts < count * 10) {
    prefixes.add(randomPrefix());
    attempts++;
  }
  return [...prefixes];
}

// --- Inline renderServiceFile (mirrors scripts/render-service-file.ts) ---

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

// --- Helpers ---

/**
 * Extracts all import/export specifiers from generated content.
 * Matches patterns like: from "..." or from '...'
 * Also matches: import "..." (side-effect imports)
 */
function extractSpecifiers(content: string): string[] {
  const specifiers: string[] = [];
  const regex = /(?:from|import)\s+["']([^"']+)["']/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    specifiers.push(match[1]);
  }
  return specifiers;
}

// --- Property Test ---

test("Property 7: ESM specifier compliance - all relative import/export specifiers in generated files end with .js", () => {
  const iterations = 100;

  for (let i = 0; i < iterations; i++) {
    const prefix = randomPrefix();
    const actionCount = 1 + Math.floor(Math.random() * 10);
    const actions = randomActions(actionCount);

    // --- Test service file ---
    const serviceContent = renderServiceFile({ prefix, actions });
    const serviceSpecifiers = extractSpecifiers(serviceContent);

    for (const specifier of serviceSpecifiers) {
      if (specifier.startsWith(".")) {
        assert.ok(
          specifier.endsWith(".js"),
          `Service file for prefix "${prefix}" has relative specifier "${specifier}" not ending with .js (iteration ${i})`
        );
      }
    }

    // --- Test barrel file ---
    const prefixCount = 1 + Math.floor(Math.random() * 20);
    const prefixes = randomUniquePrefixes(prefixCount);
    const barrelContent = renderBarrelFile(prefixes);
    const barrelSpecifiers = extractSpecifiers(barrelContent);

    // Barrel should have specifiers (one per prefix + _meta)
    assert.equal(
      barrelSpecifiers.length,
      prefixes.length + 1,
      `Barrel should have ${prefixes.length + 1} specifiers but found ${barrelSpecifiers.length} (iteration ${i})`
    );

    // All barrel specifiers are relative and must end with .js
    for (const specifier of barrelSpecifiers) {
      assert.ok(
        specifier.startsWith("."),
        `Barrel specifier "${specifier}" is not a relative path (iteration ${i})`
      );
      assert.ok(
        specifier.endsWith(".js"),
        `Barrel specifier "${specifier}" does not end with .js (iteration ${i})`
      );
    }

    // --- Test meta file ---
    const catalog = {
      sourceUrl: "https://awspolicygen.s3.amazonaws.com/js/policies.js",
      sourceSha256: randomAlpha(64),
      actionCount: actions.length,
      services: Object.fromEntries(prefixes.map((p) => [p, randomActions(3)])),
    };
    const metaContent = renderMetaFile(catalog);
    const metaSpecifiers = extractSpecifiers(metaContent);

    // Meta file is self-contained — it should have zero import/export specifiers
    assert.equal(
      metaSpecifiers.length,
      0,
      `Meta file should have zero import/export specifiers but found ${metaSpecifiers.length}: ${JSON.stringify(metaSpecifiers)} (iteration ${i})`
    );
  }
});
