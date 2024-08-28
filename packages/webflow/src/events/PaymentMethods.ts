
                    import { EventHandler } from '@arkw/core';
                    import { PaymentMethodsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const PaymentMethods: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PaymentMethods`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { nextToken,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/paymentMethods'].get({
                                query: {nextToken,maxResults,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PaymentMethods`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PaymentMethods`,
                                properties: PaymentMethodsFields,
                            });
                        },
                })
                