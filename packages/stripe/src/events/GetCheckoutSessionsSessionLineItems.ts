
                    import { EventHandler } from '@arkw/core';
                    import { itemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCheckoutSessionsSessionLineItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,limit,session,starting_after, session,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/checkout/sessions/{session}/line_items'].get({
                                query: {ending_before,expand,limit,session,starting_after,},
                                params: {session,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `item`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `item`,
                                properties: itemFields,
                            });
                        },
                })
                