import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { renderBarrelFile } from "./render-barrel-file.ts";
import { renderMetaFile } from "./render-meta-file.ts";
import { renderServiceFile } from "./render-service-file.ts";

const sourceUrl = "https://awspolicygen.s3.amazonaws.com/js/policies.js";
const fetchTimeoutMs = 30_000;

type NormalizedService = {
  prefix: string;
  actions: string[];
};

type NormalizedCatalog = {
  sourceUrl: string;
  sourceSha256: string;
  actionCount: number;
  services: Record<string, string[]>;
};

async function main(): Promise<void> {
  const rawSource = await fetchPoliciesJs();
  const catalog = normalizeCatalog({ rawSource, sourceUrl });
  const catalogDir = resolve("src/catalog");

  await mkdir(catalogDir, { recursive: true });

  let written = 0;
  let skipped = 0;

  // Generate per-service files
  for (const [prefix, actions] of Object.entries(catalog.services)) {
    const content = renderServiceFile({ prefix, actions });
    const changed = await writeIfChanged(resolve(catalogDir, `${prefix}.ts`), content);
    if (changed) written++;
    else skipped++;
  }

  // Generate _meta.ts
  const metaContent = renderMetaFile(catalog);
  const metaChanged = await writeIfChanged(resolve(catalogDir, "_meta.ts"), metaContent);
  if (metaChanged) written++;
  else skipped++;

  // Generate barrel index.ts
  const barrelContent = renderBarrelFile(Object.keys(catalog.services));
  const barrelChanged = await writeIfChanged(resolve(catalogDir, "index.ts"), barrelContent);
  if (barrelChanged) written++;
  else skipped++;

  // Remove stale service files
  const entries = await readdir(catalogDir);
  const serviceKeys = new Set(Object.keys(catalog.services));
  for (const entry of entries) {
    if (!entry.endsWith(".ts")) continue;
    if (entry === "_meta.ts" || entry === "index.ts") continue;
    const prefix = entry.slice(0, -3); // strip .ts
    if (!serviceKeys.has(prefix)) {
      try {
        await unlink(resolve(catalogDir, entry));
        console.log(`Removed stale file: src/catalog/${entry}`);
      } catch (err) {
        console.warn(`Warning: failed to remove stale file src/catalog/${entry}:`, err);
      }
    }
  }

  // Update package.json exports map
  await updatePackageJsonExports(catalog.services);

  console.log(
    `IAM catalog generation complete: ${Object.keys(catalog.services).length} services, ${catalog.actionCount} actions. ` +
      `Files written: ${written}, skipped (unchanged): ${skipped}.`,
  );
}

/**
 * Writes content to a file only if the content differs from what's already on disk.
 * Returns true if the file was written, false if skipped.
 */
async function writeIfChanged(filePath: string, content: string): Promise<boolean> {
  const existing = await readIfExists(filePath);
  if (existing === content) {
    return false;
  }
  await writeFile(filePath, content, "utf8");
  return true;
}

/**
 * Updates package.json exports map with subpath entries for each service,
 * plus the root "." and "./_meta" entries. Also sets "sideEffects": false.
 * Only writes if the content actually changed.
 */
async function updatePackageJsonExports(services: Record<string, string[]>): Promise<void> {
  const pkgPath = resolve("package.json");
  const pkgRaw = await readFile(pkgPath, "utf8");
  const pkg = JSON.parse(pkgRaw) as Record<string, unknown>;

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
  const sortedPrefixes = Object.keys(services).sort((a, b) => a.localeCompare(b));
  for (const prefix of sortedPrefixes) {
    exportsMap[`./${prefix}`] = {
      import: `./dist/catalog/${prefix}.js`,
      types: `./dist/catalog/${prefix}.d.ts`,
    };
  }

  pkg.exports = exportsMap;
  pkg.sideEffects = false;

  const updatedRaw = JSON.stringify(pkg, null, 2) + "\n";
  if (pkgRaw === updatedRaw) return;

  await writeFile(pkgPath, updatedRaw, "utf8");
}

async function fetchPoliciesJs(): Promise<string> {
  const abortController = new AbortController();
  const timeout = setTimeout(() => abortController.abort(), fetchTimeoutMs);

  try {
    const response = await fetch(sourceUrl, {
      signal: abortController.signal,
      headers: {
        accept:
          "application/javascript, text/javascript, text/plain;q=0.9, */*;q=0.8",
      },
    });
    if (!response.ok) {
      throw new Error(
        `Failed to download IAM action catalog from ${sourceUrl}: ${response.status} ${response.statusText}`,
      );
    }
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function parseRawServiceMap(
  rawSource: string,
  sourceUrl: string,
): Record<string, unknown> {
  const matched = rawSource.match(
    /app\.PolicyEditorConfig\s*=\s*(\{[\s\S]*\})\s*$/,
  );
  if (matched?.[1] == null) {
    throw new Error(
      `Could not locate app.PolicyEditorConfig in ${sourceUrl}.`,
    );
  }

  const parsed: unknown = JSON.parse(matched[1]);
  const rawServiceMap =
    parsed != null && typeof parsed === "object"
      ? (parsed as Record<string, unknown>).serviceMap
      : undefined;

  if (rawServiceMap == null || typeof rawServiceMap !== "object") {
    throw new Error(`Unexpected serviceMap payload in ${sourceUrl}.`);
  }

  return rawServiceMap as Record<string, unknown>;
}

function normalizeCatalog(props: {
  rawSource: string;
  sourceUrl: string;
}): NormalizedCatalog {
  const rawServiceMap = parseRawServiceMap(props.rawSource, props.sourceUrl);

  const serviceEntries = Object.values(rawServiceMap)
    .map(normalizeService)
    .filter((s): s is NormalizedService => s != null)
    .sort((a, b) => a.prefix.localeCompare(b.prefix));

  const services = Object.fromEntries(
    serviceEntries.map((s) => [s.prefix, s.actions]),
  );

  return {
    sourceUrl: props.sourceUrl,
    sourceSha256: sha256(props.rawSource),
    actionCount: serviceEntries.reduce((t, s) => t + s.actions.length, 0),
    services,
  };
}

function extractServicePrefix(service: unknown): string | null {
  if (service == null || typeof service !== "object") return null;
  if (!("StringPrefix" in service)) return null;
  const prefix = String((service as Record<string, unknown>).StringPrefix ?? "").trim();
  return prefix.length > 0 ? prefix : null;
}

function extractUniqueActions(service: unknown): string[] {
  if (
    service == null ||
    typeof service !== "object" ||
    !("Actions" in service) ||
    !Array.isArray((service as Record<string, unknown>).Actions)
  ) {
    return [];
  }
  return [
    ...new Set(
      ((service as Record<string, unknown>).Actions as unknown[]).map((a) =>
        String(a).trim(),
      ),
    ),
  ]
    .filter((a) => a.length > 0)
    .sort((a, b) => a.localeCompare(b));
}

function normalizeService(service: unknown): NormalizedService | null {
  const prefix = extractServicePrefix(service);
  if (prefix == null) return null;

  const actions = extractUniqueActions(service);
  if (actions.length === 0) return null;

  return { prefix, actions };
}

async function readIfExists(path: string): Promise<string | null> {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (isNotFoundError(error)) return null;
    throw error;
  }
}

function isNotFoundError(error: unknown): boolean {
  return (
    error != null &&
    typeof error === "object" &&
    "code" in error &&
    (error as Record<string, unknown>).code === "ENOENT"
  );
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

await main();
