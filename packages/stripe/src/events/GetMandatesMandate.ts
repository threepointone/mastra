
                    import { EventHandler } from '@arkw/core';
                    import { mandateFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetMandatesMandate: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-mandate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,mandate, mandate,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/mandates/{mandate}'].get({
                                query: {expand,mandate,},
                                params: {mandate,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `mandate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `mandate`,
                                properties: mandateFields,
                            });
                        },
                })
                