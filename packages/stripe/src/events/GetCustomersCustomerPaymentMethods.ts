
                    import { EventHandler } from '@arkw/core';
                    import { payment_methodFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerPaymentMethods: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-payment_method`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,ending_before,expand,limit,starting_after,type, customer,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/customers/{customer}/payment_methods'].get({
                                query: {customer,ending_before,expand,limit,starting_after,type,},
                                params: {customer,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `payment_method`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `payment_method`,
                                properties: payment_methodFields,
                            });
                        },
                })
                