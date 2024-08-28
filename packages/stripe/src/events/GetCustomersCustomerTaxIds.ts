
                    import { EventHandler } from '@arkw/core';
                    import { tax_idFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerTaxIds: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-tax_id`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,ending_before,expand,limit,starting_after, customer,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/customers/{customer}/tax_ids'].get({
                                query: {customer,ending_before,expand,limit,starting_after,},
                                params: {customer,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tax_id`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tax_id`,
                                properties: tax_idFields,
                            });
                        },
                })
                