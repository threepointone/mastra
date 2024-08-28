
                    import { EventHandler } from '@arkw/core';
                    import { gist-simpleFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const gists: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-gist-simple`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { gist-id, gist_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/gists/{gist_id}'].get({
                                query: {gist-id,},
                                params: {gist_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `gist-simple`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `gist-simple`,
                                properties: gist-simpleFields,
                            });
                        },
                })
                