import { prefixToCamelCase, prefixToPascalCase } from "./naming.ts";

interface RenderServiceFileProps {
  prefix: string;
  actions: string[];
}

/**
 * Renders a per-service TypeScript module that exports:
 * - An Action_Tuple const (e.g., `s3Actions`)
 * - An Action_Union type (e.g., `S3Action`)
 * - A Service_Function (e.g., `s3(action)`)
 */
export function renderServiceFile(props: RenderServiceFileProps): string {
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
