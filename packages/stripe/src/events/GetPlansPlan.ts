
                    import { EventHandler } from '@arkw/core';
                    import { planFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetPlansPlan: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-plan`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,plan, plan,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/plans/{plan}'].get({
                                query: {expand,plan,},
                                params: {plan,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `plan`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `plan`,
                                properties: planFields,
                            });
                        },
                })
                