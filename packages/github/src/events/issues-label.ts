
                    import { EventHandler } from '@arkw/core';
                    import { labelFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const issues-label: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-label`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,name, owner,repo,name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/labels/{name}'].get({
                                query: {owner,repo,name,},
                                params: {owner,repo,name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `label`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `label`,
                                properties: labelFields,
                            });
                        },
                })
                