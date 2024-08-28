
                    import { EventHandler } from '@arkw/core';
                    import { issuing.cardholderFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetIssuingCardholdersCardholder: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issuing.cardholder`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cardholder,expand, cardholder,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/issuing/cardholders/{cardholder}'].get({
                                query: {cardholder,expand,},
                                params: {cardholder,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issuing.cardholder`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issuing.cardholder`,
                                properties: issuing.cardholderFields,
                            });
                        },
                })
                