
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveInventoryPhysicalCountResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const DeprecatedRetrieveInventoryPhysicalCount: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveInventoryPhysicalCountResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { physical_count_id, physical_count_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/inventory/physical-count/{physical_count_id}'].get({
                                query: {physical_count_id,},
                                params: {physical_count_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveInventoryPhysicalCountResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveInventoryPhysicalCountResponse`,
                                properties: RetrieveInventoryPhysicalCountResponseFields,
                            });
                        },
                })
                