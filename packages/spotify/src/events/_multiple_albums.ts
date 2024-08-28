
                    import { EventHandler } from '@arkw/core';
                    import { ManyAlbumsFields } from '../constants';
                    import { SpotifyIntegration } from '..';

                    export const _multiple_albums: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ManyAlbums`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { QueryAlbumIds,QueryMarket, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/albums'].get({
                                query: {QueryAlbumIds,QueryMarket,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ManyAlbums`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ManyAlbums`,
                                properties: ManyAlbumsFields,
                            });
                        },
                })
                