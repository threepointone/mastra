
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveBookingResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveBooking: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveBookingResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { booking_id, booking_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/bookings/{booking_id}'].get({
                                query: {booking_id,},
                                params: {booking_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveBookingResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveBookingResponse`,
                                properties: RetrieveBookingResponseFields,
                            });
                        },
                })
                