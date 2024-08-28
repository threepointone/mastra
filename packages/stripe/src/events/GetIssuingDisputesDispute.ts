
                    import { EventHandler } from '@arkw/core';
                    import { issuing.disputeFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetIssuingDisputesDispute: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issuing.dispute`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dispute,expand, dispute,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/issuing/disputes/{dispute}'].get({
                                query: {dispute,expand,},
                                params: {dispute,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issuing.dispute`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issuing.dispute`,
                                properties: issuing.disputeFields,
                            });
                        },
                })
                