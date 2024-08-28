
                    import { EventHandler } from '@arkw/core';
                    import { balanceFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetBalance: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-balance`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/balance'].get({
                                query: {expand,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `balance`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `balance`,
                                properties: balanceFields,
                            });
                        },
                })
                