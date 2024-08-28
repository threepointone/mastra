
                    import { EventHandler } from '@arkw/core';
                    import { PagingSimplifiedAudiobookObjectFields } from '../constants';
                    import { SpotifyIntegration } from '..';

                    export const _users_saved_audiobooks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PagingSimplifiedAudiobookObject`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { QueryLimit,QueryOffset, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/me/audiobooks'].get({
                                query: {QueryLimit,QueryOffset,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PagingSimplifiedAudiobookObject`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PagingSimplifiedAudiobookObject`,
                                properties: PagingSimplifiedAudiobookObjectFields,
                            });
                        },
                })
                