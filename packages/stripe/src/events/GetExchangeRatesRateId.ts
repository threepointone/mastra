
                    import { EventHandler } from '@arkw/core';
                    import { exchange_rateFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetExchangeRatesRateId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-exchange_rate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,rate_id, rate_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/exchange_rates/{rate_id}'].get({
                                query: {expand,rate_id,},
                                params: {rate_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `exchange_rate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `exchange_rate`,
                                properties: exchange_rateFields,
                            });
                        },
                })
                