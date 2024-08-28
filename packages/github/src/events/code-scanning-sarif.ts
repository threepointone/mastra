
                    import { EventHandler } from '@arkw/core';
                    import { code-scanning-sarifs-statusFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const code-scanning-sarif: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-code-scanning-sarifs-status`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,sarif_id, owner,repo,sarif_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}'].get({
                                query: {owner,repo,sarif_id,},
                                params: {owner,repo,sarif_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `code-scanning-sarifs-status`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `code-scanning-sarifs-status`,
                                properties: code-scanning-sarifs-statusFields,
                            });
                        },
                })
                