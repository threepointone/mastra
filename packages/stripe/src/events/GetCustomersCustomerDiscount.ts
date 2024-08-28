
                    import { EventHandler } from '@arkw/core';
                    import { discountFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerDiscount: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-discount`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,expand, customer,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/customers/{customer}/discount'].get({
                                query: {customer,expand,},
                                params: {customer,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `discount`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `discount`,
                                properties: discountFields,
                            });
                        },
                })
                