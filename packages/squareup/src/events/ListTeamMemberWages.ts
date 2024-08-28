
                    import { EventHandler } from '@arkw/core';
                    import { ListTeamMemberWagesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListTeamMemberWages: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListTeamMemberWagesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team_member_id,limit,cursor, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/labor/team-member-wages'].get({
                                query: {team_member_id,limit,cursor,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListTeamMemberWagesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListTeamMemberWagesResponse`,
                                properties: ListTeamMemberWagesResponseFields,
                            });
                        },
                })
                