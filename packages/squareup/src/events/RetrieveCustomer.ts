
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveCustomerResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveCustomer: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveCustomerResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer_id, customer_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/customers/{customer_id}'].get({
                                query: {customer_id,},
                                params: {customer_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveCustomerResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveCustomerResponse`,
                                properties: RetrieveCustomerResponseFields,
                            });
                        },
                })
                