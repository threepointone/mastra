
                    import { EventHandler } from '@arkw/core';
                    import { SSIOInsertionOrderStatusResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ssio_insertion_orders_status_by_pin_order_id: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-SSIOInsertionOrderStatusResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_pin_order_id,ad_account_id,pin_order_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/ssio/insertion_orders/{pin_order_id}/status'].get({
                                query: {path_ad_account_id,path_pin_order_id,},
                                params: {ad_account_id,pin_order_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SSIOInsertionOrderStatusResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SSIOInsertionOrderStatusResponse`,
                                properties: SSIOInsertionOrderStatusResponseFields,
                            });
                        },
                })
                