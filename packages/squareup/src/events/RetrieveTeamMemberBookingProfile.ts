
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveTeamMemberBookingProfileResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveTeamMemberBookingProfile: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveTeamMemberBookingProfileResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team_member_id, team_member_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/bookings/team-member-booking-profiles/{team_member_id}'].get({
                                query: {team_member_id,},
                                params: {team_member_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveTeamMemberBookingProfileResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveTeamMemberBookingProfileResponse`,
                                properties: RetrieveTeamMemberBookingProfileResponseFields,
                            });
                        },
                })
                