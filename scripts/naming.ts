/**
 * Converts a hyphenated service prefix to a camelCase identifier.
 * Used for function names and action tuple const names.
 * Examples: "s3" → "s3", "access-analyzer" → "accessAnalyzer", "acm-pca" → "acmPca"
 */
export function prefixToCamelCase(prefix: string): string {
  return prefix.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
}

/**
 * Converts a hyphenated service prefix to a PascalCase identifier.
 * Used for type names.
 * Examples: "s3" → "S3", "access-analyzer" → "AccessAnalyzer", "acm-pca" → "AcmPca"
 */
export function prefixToPascalCase(prefix: string): string {
  const camel = prefixToCamelCase(prefix);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}
