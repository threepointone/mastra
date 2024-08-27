import { execa } from 'execa';
import fs from 'fs';
import path from 'path';
import { parse } from 'yaml';

import { sources } from './source';
import { createIntegration, createPackageJson, createTsConfig } from './template';

function buildSyncFunc({ name, paths }) {
  return Object.entries(paths)
    .map(([path, methods]) => {
      return { path, method: (methods as any).get };
    })
    .filter(Boolean)
    .filter(({ method }) => {
      return method?.responses?.['200']?.content?.['application/json']?.schema?.properties?.data?.type === 'array';
    })
    .map(({ method, path }) => {
      const entityType = method?.responses?.['200']?.content?.[
        'application/json'
      ]?.schema?.properties?.data?.items?.$ref?.replace('#/components/schemas/', '');
      return {
        path,
        entityType,
        eventDef: `
             '${name.toLowerCase()}.${entityType}/sync': {
                schema: z.object({
                    emails: z.record(z.any()),
                    entityType: z.string(),
                }),
                handler: ${method.operationId},
            },
        `,
        funcName: method.operationId,
      };
    });
}

function buildFieldDefs(schemas) {
  const typeToType = {
    string: `PropertyType.SINGLE_LINE_TEXT`,
  };

  function makeProps(properties: Record<string, any>) {
    const props = Object.entries(properties || {}).map(([k, p]) => {
      return `{
                name: '${k}',
                displayName: '${k}',
                order: 0,
                type: ${typeToType[p.type] || `PropertyType.SINGLE_LINE_TEXT`} ,
            }`;
    });

    if (props.length === 0) {
      return [];
    }

    return props;
  }

  function makeProperties({ s }) {
    let props: string[] = [];

    if (s.properties) {
      props = [...props, ...makeProps(s.properties)];
    } else if (s.allOf) {
      props = [...props, ...s.allOf.flatMap(s => makeProperties({ s }))];
    } else if (s.$ref) {
      const refName = s.$ref.replace('#/components/schemas/', '');
      const newS = schemas[refName];
      props = [...props, ...makeProperties({ s: newS })];
    }

    return props;
  }

  return Object.entries(schemas)
    .map(([name, schema]) => {
      const props = makeProperties({ s: schema });

      return `
            export const ${name.replaceAll('--', '_').replaceAll('-', '_')}Fields = [${props.join(',\n')}];
            `;
    })
    .join('\n\n');
}

async function main() {
  for (const source of sources) {
    const name = source['Integration Name'];
    const authorization_url = source['Authorization URL'];
    const token_url = source['Token URL'];
    const openapi_url = source['OpenAPI integration'];

    if (['admin', 'cli', 'core', 'google', 'mailchimp', 'rewatch', 'slack', 'twitter-v2'].includes(name)) {
      console.log(`Skipping ${name} because it is a reserved name`);
      continue;
    }

    if (!authorization_url) {
      console.log(`Skipping ${name} because it does not have an authorization URL`);
      continue;
    }

    const modulePath = path.join(process.cwd(), 'packages', name);

    if (!fs.existsSync(modulePath)) {
      fs.mkdirSync(modulePath);
    }

    // write package.json
    const pkgJsonPath = path.join(modulePath, 'package.json');
    fs.writeFileSync(pkgJsonPath, JSON.stringify(createPackageJson(name), null, 2));

    // write tsconfig
    const tsConfigPath = path.join(modulePath, 'tsconfig.json');
    fs.writeFileSync(tsConfigPath, JSON.stringify(createTsConfig(), null, 2));

    // dts.config.ts
    fs.writeFileSync(
      path.join(modulePath, 'dts.config.ts'),
      `
    import image from '@rollup/plugin-image';

    export default {
      rollup(config, options) {
        config.plugins.push(image());
        return config;
      },
    };
            `,
    );

    const srcPath = path.join(modulePath, 'src');

    if (!fs.existsSync(srcPath)) {
      fs.mkdirSync(srcPath);
    }

    let syncFuncs = '';
    let syncFuncImports = ``;

    try {
      const openapispecRes = await fetch(openapi_url);
      let openapi = await openapispecRes.text();

      if (openapi_url.endsWith('.yaml')) {
        const apiobj = parse(openapi);
        const schemas = (apiobj as any)?.components?.schemas;

        if (schemas) {
          const fieldDefs = buildFieldDefs(schemas);
          fs.writeFileSync(
            path.join(srcPath, 'constants.ts'),
            `
                    import { PropertyType } from '@arkw/core';
                    ${fieldDefs}
                    `,
          );
        }

        if (!fs.existsSync(path.join(srcPath, 'events'))) {
          fs.mkdirSync(path.join(srcPath, 'events'));
        }

        const funcMap = buildSyncFunc({ name, paths: (apiobj as any)?.paths || {} });

        syncFuncImports = funcMap
          .map(({ funcName }) => `import { ${funcName} } from './events/${funcName}'`)
          .join('\n');

        funcMap.forEach(({ funcName, entityType, path: pathApi }) => {
          fs.writeFileSync(
            path.join(srcPath, 'events', `${funcName}.ts`),
            `
                    import { EventHandler } from '@arkw/core';
                    import { ${entityType}Fields } from '../constants';
                    import { ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}Integration } from '..';

                    export const ${funcName}: EventHandler<${
              name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            }Integration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: \`\${name}-sync-${entityType}\`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })
                            const response = await proxy['${pathApi}'].get()

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: \`${entityType}\`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: \`${entityType}\`,
                                properties: ${entityType}Fields,
                            });
                        },
                })
                `,
          );
        });

        syncFuncs = `this.events = {${funcMap.map(({ eventDef }) => eventDef).join('\n')}}`;

        openapi = JSON.stringify(apiobj, null, 2);
      }

      fs.writeFileSync(
        path.join(srcPath, 'openapi.ts'),
        `
            export default ${openapi} as const
            `,
      );
    } catch (e) {
      console.error(`Failed to fetch OpenAPI spec for ${name}`, e);
      continue;
    }

    const indexPath = path.join(srcPath, 'index.ts');

    const server = new URL(authorization_url);
    const authUrl = getPathFromUrl(authorization_url);
    const tokenEndpoint = getPathFromUrl(token_url);

    const serverEndpoint = `${server.protocol}//${server.host}`.replace('connectionconfig', 'this.config');

    const int = createIntegration({
      name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
      server: serverEndpoint,
      authEndpoint: authUrl,
      tokenEndpoint,
      syncFuncs,
      syncFuncImports,
    });

    fs.writeFileSync(indexPath, int);
  }

  const p = execa('pnpm', ['prettier:format']);

  p.stdout?.pipe(process.stdout);
}

function getPathFromUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname;
  } catch (error) {
    console.error('Invalid URL:', error);
    return '';
  }
}

main();
