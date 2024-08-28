
                    import { EventHandler } from '@arkw/core';
                    import { radar.early_fraud_warningFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetRadarEarlyFraudWarningsEarlyFraudWarning: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-radar.early_fraud_warning`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { early_fraud_warning,expand, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/radar/early_fraud_warnings/{early_fraud_warning}'].get({
                                query: {early_fraud_warning,expand,},
                                params: {early_fraud_warning,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `radar.early_fraud_warning`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `radar.early_fraud_warning`,
                                properties: radar.early_fraud_warningFields,
                            });
                        },
                })
                