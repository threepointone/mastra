
                    import { EventHandler } from '@arkw/core';
                    import { actions-cache-usage-by-repositoryFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-actions-cache-usage: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-actions-cache-usage-by-repository`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo, owner,repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/actions/cache/usage'].get({
                                query: {owner,repo,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-cache-usage-by-repository`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-cache-usage-by-repository`,
                                properties: actions-cache-usage-by-repositoryFields,
                            });
                        },
                })
                