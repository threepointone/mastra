
                    import { EventHandler } from '@arkw/core';
                    import { productFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetProducts: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-product`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { active,created,ending_before,expand,ids,limit,shippable,starting_after,url, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/products'].get({
                                query: {active,created,ending_before,expand,ids,limit,shippable,starting_after,url,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `product`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `product`,
                                properties: productFields,
                            });
                        },
                })
                