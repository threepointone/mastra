
                    import { EventHandler } from '@arkw/core';
                    import { V1SettlementFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveSettlement: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-V1Settlement`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,settlement_id, location_id,settlement_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/{location_id}/settlements/{settlement_id}'].get({
                                query: {location_id,settlement_id,},
                                params: {location_id,settlement_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `V1Settlement`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `V1Settlement`,
                                properties: V1SettlementFields,
                            });
                        },
                })
                