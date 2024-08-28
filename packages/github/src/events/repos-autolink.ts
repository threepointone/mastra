
                    import { EventHandler } from '@arkw/core';
                    import { autolinkFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-autolink: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-autolink`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,autolink-id, owner,repo,autolink_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/autolinks/{autolink_id}'].get({
                                query: {owner,repo,autolink-id,},
                                params: {owner,repo,autolink_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `autolink`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `autolink`,
                                properties: autolinkFields,
                            });
                        },
                })
                