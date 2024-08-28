
                    import { EventHandler } from '@arkw/core';
                    import { GetTeamMemberWageResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetTeamMemberWage: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetTeamMemberWageResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/labor/team-member-wages/{id}'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetTeamMemberWageResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetTeamMemberWageResponse`,
                                properties: GetTeamMemberWageResponseFields,
                            });
                        },
                })
                