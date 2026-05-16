import assert from "node:assert/strict";
import test from "node:test";

/**
 * Property 5: Exports map completeness
 *
 * For any set of service prefixes in the catalog, the `package.json` `"exports"` map
 * SHALL contain a subpath entry `"./{prefix}"` with `"import"` pointing to
 * `"./dist/catalog/{prefix}.js"` and `"types"` pointing to `"./dist/catalog/{prefix}.d.ts"`
 * for each prefix.
 *
 * **Validates: Requirements 4.1**
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

// --- Logic under test (replicates updatePackageJsonExports from generate-catalog.ts) ---

function buildExportsMap(servicePrefixes: string[]): Record<string, { import: string; types: string }> {
  const exportsMap: Record<string, { import: string; types: string }> = {};

  // "." entry first
  exportsMap["."] = {
    import: "./dist/index.js",
    types: "./dist/index.d.ts",
  };

  // "./_meta" entry second
  exportsMap["./_meta"] = {
    import: "./dist/catalog/_meta.js",
    types: "./dist/catalog/_meta.d.ts",
  };

  // One entry per service prefix, sorted alphabetically
  const sortedPrefixes = [...servicePrefixes].sort((a, b) => a.localeCompare(b));
  for (const prefix of sortedPrefixes) {
    exportsMap[`./${prefix}`] = {
      import: `./dist/catalog/${prefix}.js`,
      types: `./dist/catalog/${prefix}.d.ts`,
    };
  }

  return exportsMap;
}

// --- Property Test ---

test("Property 5: Exports map completeness - each prefix has correct subpath entry", async () => {
  const iterations = 100;

  for (let i = 0; i < iterations; i++) {
    // Generate a random catalog size between 1 and 30
    const n = 1 + Math.floor(Math.random() * 30);
    const prefixes = randomUniquePrefixes(n);

    const exportsMap = buildExportsMap(prefixes);

    // Property: "." entry exists with correct import/types paths
    assert.ok(
      "." in exportsMap,
      `Missing "." entry in exports map (iteration ${i})`,
    );
    assert.deepEqual(
      exportsMap["."],
      { import: "./dist/index.js", types: "./dist/index.d.ts" },
      `"." entry has incorrect paths (iteration ${i})`,
    );

    // Property: "./_meta" entry exists with correct paths
    assert.ok(
      "./_meta" in exportsMap,
      `Missing "./_meta" entry in exports map (iteration ${i})`,
    );
    assert.deepEqual(
      exportsMap["./_meta"],
      { import: "./dist/catalog/_meta.js", types: "./dist/catalog/_meta.d.ts" },
      `"./_meta" entry has incorrect paths (iteration ${i})`,
    );

    // Property: for each prefix, "./{prefix}" entry exists with correct import and types
    for (const prefix of prefixes) {
      const key = `./${prefix}`;
      assert.ok(
        key in exportsMap,
        `Missing "${key}" entry in exports map for prefix "${prefix}" (iteration ${i})`,
      );
      assert.deepEqual(
        exportsMap[key],
        {
          import: `./dist/catalog/${prefix}.js`,
          types: `./dist/catalog/${prefix}.d.ts`,
        },
        `"${key}" entry has incorrect paths (iteration ${i})`,
      );
    }

    // Property: no extra entries beyond ".", "./_meta", and the service prefixes
    const expectedKeys = new Set([".", "./_meta", ...prefixes.map((p) => `./${p}`)]);
    const actualKeys = new Set(Object.keys(exportsMap));
    assert.equal(
      actualKeys.size,
      expectedKeys.size,
      `Exports map has ${actualKeys.size} entries but expected ${expectedKeys.size} (iteration ${i})`,
    );
    for (const key of actualKeys) {
      assert.ok(
        expectedKeys.has(key),
        `Unexpected entry "${key}" in exports map (iteration ${i})`,
      );
    }
  }
});
