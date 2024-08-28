
                    import { EventHandler } from '@arkw/core';
                    import { OrderLineFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const order_lines: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-OrderLine`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_order_line_id, ad_account_id,order_line_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/order_lines/{order_line_id}'].get({
                                query: {path_ad_account_id,path_order_line_id,},
                                params: {ad_account_id,order_line_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `OrderLine`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `OrderLine`,
                                properties: OrderLineFields,
                            });
                        },
                })
                