import assert from "node:assert/strict";
import { mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { unlink } from "node:fs/promises";
import test from "node:test";

/**
 * Property 6: Stale file removal
 *
 * For any pair of consecutive generator runs where the second run's catalog is a
 * strict subset of the first, all service files corresponding to prefixes present
 * in the first run but absent in the second SHALL be deleted from `src/catalog/`.
 *
 * **Validates: Requirements 7.3**
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

/**
 * Picks a random strict subset of the given array.
 * The subset will have between 0 and arr.length - 1 elements.
 */
function randomStrictSubset(arr: string[]): string[] {
  if (arr.length <= 1) return [];
  // Pick a random size between 0 and arr.length - 1
  const size = Math.floor(Math.random() * arr.length);
  // Shuffle and take the first `size` elements
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, size);
}

// --- Stale removal logic (extracted from generate-catalog.ts) ---

async function removeStaleFiles(catalogDir: string, serviceKeys: Set<string>): Promise<void> {
  const entries = await readdir(catalogDir);
  for (const entry of entries) {
    if (!entry.endsWith(".ts")) continue;
    if (entry === "_meta.ts" || entry === "index.ts") continue;
    const prefix = entry.slice(0, -3);
    if (!serviceKeys.has(prefix)) {
      await unlink(resolve(catalogDir, entry));
    }
  }
}

// --- Property Test ---

test("Property 6: Stale file removal - removed prefixes have their files deleted", async () => {
  const iterations = 75;

  for (let i = 0; i < iterations; i++) {
    // Generate a random initial set of prefixes (5-20 services)
    const initialCount = 5 + Math.floor(Math.random() * 16);
    const initialPrefixes = randomUniquePrefixes(initialCount);

    // Generate a strict subset as the "current" catalog
    const currentPrefixes = randomStrictSubset(initialPrefixes);
    const removedPrefixes = initialPrefixes.filter((p) => !currentPrefixes.includes(p));

    // Skip if subset is not strict (same size means no removal to test)
    if (removedPrefixes.length === 0) continue;

    // Create a temp directory to simulate src/catalog/
    const tempDir = await mkdtemp(join(tmpdir(), "stale-removal-test-"));

    try {
      // Populate with .ts files for all initial prefixes
      for (const prefix of initialPrefixes) {
        await writeFile(join(tempDir, `${prefix}.ts`), `// ${prefix} service file\n`);
      }

      // Also create _meta.ts and index.ts (these should never be removed)
      await writeFile(join(tempDir, "_meta.ts"), "// meta file\n");
      await writeFile(join(tempDir, "index.ts"), "// barrel file\n");

      // Run the stale removal logic with the current (subset) catalog
      const serviceKeys = new Set(currentPrefixes);
      await removeStaleFiles(tempDir, serviceKeys);

      // Read remaining files
      const remaining = await readdir(tempDir);
      const remainingSet = new Set(remaining);

      // Verify: files for removed prefixes are deleted
      for (const prefix of removedPrefixes) {
        assert.ok(
          !remainingSet.has(`${prefix}.ts`),
          `Stale file "${prefix}.ts" should have been deleted but still exists (iteration ${i}, ` +
            `initial=${initialPrefixes.length}, current=${currentPrefixes.length}, removed=${removedPrefixes.length})`
        );
      }

      // Verify: _meta.ts is preserved
      assert.ok(
        remainingSet.has("_meta.ts"),
        `_meta.ts should be preserved but was deleted (iteration ${i})`
      );

      // Verify: index.ts is preserved
      assert.ok(
        remainingSet.has("index.ts"),
        `index.ts should be preserved but was deleted (iteration ${i})`
      );

      // Verify: files for prefixes IN the current set are preserved
      for (const prefix of currentPrefixes) {
        assert.ok(
          remainingSet.has(`${prefix}.ts`),
          `Current service file "${prefix}.ts" should be preserved but was deleted (iteration ${i})`
        );
      }

      // Verify: total remaining .ts files = current prefixes + _meta.ts + index.ts
      const remainingTsFiles = remaining.filter((f) => f.endsWith(".ts"));
      assert.equal(
        remainingTsFiles.length,
        currentPrefixes.length + 2, // +2 for _meta.ts and index.ts
        `Expected ${currentPrefixes.length + 2} .ts files remaining but got ${remainingTsFiles.length} (iteration ${i})`
      );
    } finally {
      // Clean up temp directory
      await rm(tempDir, { recursive: true, force: true });
    }
  }
});
