
                    import { EventHandler } from '@arkw/core';
                    import { EventsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _events: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Events`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { stream_type,stream_position,limit,event_type,created_after,created_before, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/events'].get({
                                query: {stream_type,stream_position,limit,event_type,created_after,created_before,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Events`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Events`,
                                properties: EventsFields,
                            });
                        },
                })
                