
                    import { EventHandler } from '@arkw/core';
                    import { cardFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerCardsId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-card`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,expand,id, customer,id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/customers/{customer}/cards/{id}'].get({
                                query: {customer,expand,id,},
                                params: {customer,id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `card`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `card`,
                                properties: cardFields,
                            });
                        },
                })
                