
                    import { EventHandler } from '@arkw/core';
                    import { topicFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-all-topics: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-topic`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,page,per-page, owner,repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/topics'].get({
                                query: {owner,repo,page,per-page,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `topic`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `topic`,
                                properties: topicFields,
                            });
                        },
                })
                