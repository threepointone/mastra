
                    import { EventHandler } from '@arkw/core';
                    import { cash_balanceFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerCashBalance: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-cash_balance`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,expand, customer,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/customers/{customer}/cash_balance'].get({
                                query: {customer,expand,},
                                params: {customer,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `cash_balance`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `cash_balance`,
                                properties: cash_balanceFields,
                            });
                        },
                })
                