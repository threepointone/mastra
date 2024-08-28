
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveInventoryAdjustmentResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const DeprecatedRetrieveInventoryAdjustment: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveInventoryAdjustmentResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { adjustment_id, adjustment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/inventory/adjustment/{adjustment_id}'].get({
                                query: {adjustment_id,},
                                params: {adjustment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveInventoryAdjustmentResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveInventoryAdjustmentResponse`,
                                properties: RetrieveInventoryAdjustmentResponseFields,
                            });
                        },
                })
                