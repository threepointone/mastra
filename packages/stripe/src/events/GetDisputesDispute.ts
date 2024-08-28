
                    import { EventHandler } from '@arkw/core';
                    import { disputeFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetDisputesDispute: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-dispute`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dispute,expand, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/disputes/{dispute}'].get({
                                query: {dispute,expand,},
                                params: {dispute,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `dispute`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `dispute`,
                                properties: disputeFields,
                            });
                        },
                })
                