
                    import { EventHandler } from '@arkw/core';
                    import { issuing.settlementFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetIssuingSettlements: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-issuing.settlement`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { created,ending_before,expand,limit,starting_after, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/issuing/settlements'].get({
                                query: {created,ending_before,expand,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issuing.settlement`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issuing.settlement`,
                                properties: issuing.settlementFields,
                            });
                        },
                })
                