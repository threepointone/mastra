
                    import { EventHandler } from '@arkw/core';
                    import { chargeFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetChargesCharge: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-charge`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { charge,expand, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/charges/{charge}'].get({
                                query: {charge,expand,},
                                params: {charge,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `charge`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `charge`,
                                properties: chargeFields,
                            });
                        },
                })
                