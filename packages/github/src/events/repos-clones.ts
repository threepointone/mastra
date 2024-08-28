
                    import { EventHandler } from '@arkw/core';
                    import { clone-trafficFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-clones: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-clone-traffic`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,per, owner,repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/traffic/clones'].get({
                                query: {owner,repo,per,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `clone-traffic`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `clone-traffic`,
                                properties: clone-trafficFields,
                            });
                        },
                })
                