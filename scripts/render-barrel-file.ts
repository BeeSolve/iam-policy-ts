/**
 * Renders the barrel file (`src/catalog/index.ts`) that re-exports
 * all per-service modules and the metadata module.
 *
 * The barrel contains ONLY re-export statements — no runtime logic.
 * All export specifiers end with `.js` for ESM compliance.
 */
export function renderBarrelFile(prefixes: string[]): string {
  const sorted = [...prefixes].sort();

  const lines: string[] = [
    `export * from "./_meta.js";`,
    ...sorted.map((prefix) => `export * from "./${prefix}.js";`),
    "", // trailing newline
  ];

  return lines.join("\n");
}
