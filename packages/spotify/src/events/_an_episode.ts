
                    import { EventHandler } from '@arkw/core';
                    import { OneEpisodeFields } from '../constants';
                    import { SpotifyIntegration } from '..';

                    export const _an_episode: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-OneEpisode`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,QueryMarket, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/episodes/{id}'].get({
                                query: {id,QueryMarket,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `OneEpisode`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `OneEpisode`,
                                properties: OneEpisodeFields,
                            });
                        },
                })
                