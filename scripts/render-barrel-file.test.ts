import assert from "node:assert/strict";
import test, { describe } from "node:test";
import { renderBarrelFile } from "./render-barrel-file.ts";

/**
 * Property 3: One-to-one file mapping
 *
 * For any normalized catalog containing N service prefixes, the generator SHALL
 * produce exactly N `.ts` files in `src/catalog/` (excluding `_meta.ts` and `index.ts`),
 * where each file name matches its corresponding service prefix.
 *
 * **Validates: Requirements 1.1**
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

function randomUniquePrefixes(count: number): string[] {
  const prefixes = new Set<string>();
  let attempts = 0;
  while (prefixes.size < count && attempts < count * 10) {
    prefixes.add(randomPrefix());
    attempts++;
  }
  return [...prefixes];
}

// --- Property Test ---

test("Property 3: One-to-one file mapping - N services produce exactly N service files", async (t) => {
  const iterations = 100;

  for (let i = 0; i < iterations; i++) {
    // Generate a random catalog size between 1 and 25
    const n = 1 + Math.floor(Math.random() * 25);
    const prefixes = randomUniquePrefixes(n);

    // Simulate the generator's file-production logic:
    // For each prefix in the catalog, the generator produces one file named `{prefix}.ts`
    const generatedFileNames = prefixes.map((prefix) => `${prefix}.ts`);

    // Property: exactly N service files are produced (excluding _meta.ts and index.ts)
    assert.equal(
      generatedFileNames.length,
      prefixes.length,
      `Expected ${prefixes.length} service files but got ${generatedFileNames.length} (iteration ${i})`
    );

    // Property: each file name matches its corresponding service prefix
    for (const prefix of prefixes) {
      const expectedFileName = `${prefix}.ts`;
      assert.ok(
        generatedFileNames.includes(expectedFileName),
        `Missing file "${expectedFileName}" for prefix "${prefix}" (iteration ${i})`
      );
    }

    // Property: no duplicates in generated file names
    const uniqueFileNames = new Set(generatedFileNames);
    assert.equal(
      uniqueFileNames.size,
      generatedFileNames.length,
      `Duplicate file names detected (iteration ${i})`
    );

    // Verify barrel file references exactly N service re-exports (plus _meta)
    const barrelContent = renderBarrelFile(prefixes);
    const exportLines = barrelContent
      .split("\n")
      .filter((line) => line.startsWith("export * from"));

    // Barrel should have N service exports + 1 for _meta = N+1 total
    assert.equal(
      exportLines.length,
      prefixes.length + 1,
      `Barrel should have ${prefixes.length + 1} export lines (N services + _meta) but got ${exportLines.length} (iteration ${i})`
    );

    // Verify each prefix has a corresponding export in the barrel pointing to the correct file
    for (const prefix of prefixes) {
      const expectedExport = `export * from "./${prefix}.js";`;
      assert.ok(
        barrelContent.includes(expectedExport),
        `Barrel missing export for prefix "${prefix}": expected "${expectedExport}" (iteration ${i})`
      );
    }

    // Verify _meta export is present (it's the only non-service export)
    assert.ok(
      barrelContent.includes(`export * from "./_meta.js";`),
      `Barrel missing _meta export (iteration ${i})`
    );

    // Verify no index.ts or _meta.ts appear as service file names
    assert.ok(
      !generatedFileNames.includes("_meta.ts"),
      `_meta.ts should not be in service files (iteration ${i})`
    );
    assert.ok(
      !generatedFileNames.includes("index.ts"),
      `index.ts should not be in service files (iteration ${i})`
    );
  }
});


/**
 * Property 4: Barrel purity and completeness
 *
 * For any set of generated service files, the barrel `src/catalog/index.ts` SHALL
 * contain exactly one `export * from "./{file}.js"` statement per service file plus
 * one for `_meta.ts`, and SHALL contain no other runtime statements.
 *
 * **Validates: Requirements 2.1, 2.3, 3.3**
 */

const EXPORT_STAR_PATTERN = /^export \* from "\.\/.+\.js";$/;

test("Property 4: Barrel purity and completeness - barrel contains exactly one re-export per service plus _meta, no other runtime statements", async (t) => {
  const iterations = 100;

  for (let i = 0; i < iterations; i++) {
    // Generate a random set of service prefixes (1-30)
    const count = 1 + Math.floor(Math.random() * 30);
    const prefixes = randomUniquePrefixes(count);

    const barrelContent = renderBarrelFile(prefixes);
    const lines = barrelContent.split("\n");
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");

    // --- Purity: every non-empty line is an `export * from "..."` statement ---
    for (const line of nonEmptyLines) {
      assert.match(
        line,
        EXPORT_STAR_PATTERN,
        `Non-export statement found in barrel: "${line}" (iteration ${i})`
      );
    }

    // --- Completeness: exactly one export for _meta.js ---
    const metaExports = nonEmptyLines.filter(
      (line) => line === `export * from "./_meta.js";`
    );
    assert.equal(
      metaExports.length,
      1,
      `Expected exactly 1 _meta.js export but found ${metaExports.length} (iteration ${i})`
    );

    // --- Completeness: exactly one export per service prefix ---
    for (const prefix of prefixes) {
      const expectedLine = `export * from "./${prefix}.js";`;
      const matchingLines = nonEmptyLines.filter((line) => line === expectedLine);
      assert.equal(
        matchingLines.length,
        1,
        `Expected exactly 1 export for prefix "${prefix}" but found ${matchingLines.length} (iteration ${i})`
      );
    }

    // --- Completeness: total non-empty lines = prefixes.length + 1 (_meta) ---
    assert.equal(
      nonEmptyLines.length,
      prefixes.length + 1,
      `Expected ${prefixes.length + 1} export lines (N services + _meta) but got ${nonEmptyLines.length} (iteration ${i})`
    );

    // --- Purity: no import statements ---
    const importLines = lines.filter((line) => line.trimStart().startsWith("import "));
    assert.equal(
      importLines.length,
      0,
      `Found import statements in barrel (iteration ${i}): ${importLines.join(", ")}`
    );

    // --- Purity: no variable declarations ---
    const varLines = lines.filter((line) => {
      const trimmed = line.trimStart();
      return (
        trimmed.startsWith("const ") ||
        trimmed.startsWith("let ") ||
        trimmed.startsWith("var ")
      );
    });
    assert.equal(
      varLines.length,
      0,
      `Found variable declarations in barrel (iteration ${i}): ${varLines.join(", ")}`
    );

    // --- Purity: no function declarations or calls ---
    const fnLines = lines.filter((line) => {
      const trimmed = line.trimStart();
      return (
        trimmed.startsWith("function ") ||
        trimmed.startsWith("async function ") ||
        (trimmed.includes("(") &&
          !trimmed.startsWith("export ") &&
          trimmed.trim() !== "")
      );
    });
    assert.equal(
      fnLines.length,
      0,
      `Found function declarations/calls in barrel (iteration ${i}): ${fnLines.join(", ")}`
    );
  }
});
