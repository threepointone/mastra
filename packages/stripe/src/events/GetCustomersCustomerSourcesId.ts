
                    import { EventHandler } from '@arkw/core';
                    import { payment_sourceFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerSourcesId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-payment_source`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,expand,id, customer,id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/customers/{customer}/sources/{id}'].get({
                                query: {customer,expand,id,},
                                params: {customer,id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `payment_source`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `payment_source`,
                                properties: payment_sourceFields,
                            });
                        },
                })
                