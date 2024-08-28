
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveInventoryTransferResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveInventoryTransfer: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveInventoryTransferResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { transfer_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/inventory/transfers/{transfer_id}'].get({
                                query: {transfer_id,},
                                params: {transfer_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveInventoryTransferResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveInventoryTransferResponse`,
                                properties: RetrieveInventoryTransferResponseFields,
                            });
                        },
                })
                