
                    import { EventHandler } from '@arkw/core';
                    import { code-scanning-codeql-databaseFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const code-scanning-codeql-database: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-code-scanning-codeql-database`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,language, owner,repo,language,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}'].get({
                                query: {owner,repo,language,},
                                params: {owner,repo,language,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `code-scanning-codeql-database`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `code-scanning-codeql-database`,
                                properties: code-scanning-codeql-databaseFields,
                            });
                        },
                })
                