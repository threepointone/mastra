
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveBusinessBookingProfileResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveBusinessBookingProfile: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveBusinessBookingProfileResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/bookings/business-booking-profile'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveBusinessBookingProfileResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveBusinessBookingProfileResponse`,
                                properties: RetrieveBusinessBookingProfileResponseFields,
                            });
                        },
                })
                