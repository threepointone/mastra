
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveLoyaltyProgramResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveLoyaltyProgram: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveLoyaltyProgramResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { program_id, program_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/loyalty/programs/{program_id}'].get({
                                query: {program_id,},
                                params: {program_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveLoyaltyProgramResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveLoyaltyProgramResponse`,
                                properties: RetrieveLoyaltyProgramResponseFields,
                            });
                        },
                })
                