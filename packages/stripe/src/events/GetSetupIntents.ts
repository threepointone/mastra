
                    import { EventHandler } from '@arkw/core';
                    import { setup_intentFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSetupIntents: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-setup_intent`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { attach_to_self,created,customer,ending_before,expand,limit,payment_method,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/setup_intents'].get({
                                query: {attach_to_self,created,customer,ending_before,expand,limit,payment_method,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `setup_intent`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `setup_intent`,
                                properties: setup_intentFields,
                            });
                        },
                })
                