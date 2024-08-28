
                    import { EventHandler } from '@arkw/core';
                    import { ListTeamMemberBookingProfilesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListTeamMemberBookingProfiles: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListTeamMemberBookingProfilesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { bookable_only,limit,cursor,location_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/bookings/team-member-booking-profiles'].get({
                                query: {bookable_only,limit,cursor,location_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListTeamMemberBookingProfilesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListTeamMemberBookingProfilesResponse`,
                                properties: ListTeamMemberBookingProfilesResponseFields,
                            });
                        },
                })
                