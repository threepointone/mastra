
                    import { EventHandler } from '@arkw/core';
                    import { issuing.cardFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetIssuingCards: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issuing.card`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cardholder,created,ending_before,exp_month,exp_year,expand,last4,limit,starting_after,status,type,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/issuing/cards'].get({
                                query: {cardholder,created,ending_before,exp_month,exp_year,expand,last4,limit,starting_after,status,type,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issuing.card`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issuing.card`,
                                properties: issuing.cardFields,
                            });
                        },
                })
                