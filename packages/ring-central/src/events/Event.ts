
                    import { EventHandler } from '@arkw/core';
                    import { EventFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Event: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Event`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { eventId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/events/{eventId}'].get({
                                query: {eventId,},
                                params: {eventId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Event`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Event`,
                                properties: EventFields,
                            });
                        },
                })
                