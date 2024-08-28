
                    import { EventHandler } from '@arkw/core';
                    import { GetTerminalCheckoutResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetTerminalCheckout: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetTerminalCheckoutResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { checkout_id, checkout_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/terminals/checkouts/{checkout_id}'].get({
                                query: {checkout_id,},
                                params: {checkout_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetTerminalCheckoutResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetTerminalCheckoutResponse`,
                                properties: GetTerminalCheckoutResponseFields,
                            });
                        },
                })
                