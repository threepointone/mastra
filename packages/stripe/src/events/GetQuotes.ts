
                    import { EventHandler } from '@arkw/core';
                    import { quoteFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetQuotes: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-quote`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,ending_before,expand,limit,starting_after,status,test_clock, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/quotes'].get({
                                query: {customer,ending_before,expand,limit,starting_after,status,test_clock,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `quote`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `quote`,
                                properties: quoteFields,
                            });
                        },
                })
                