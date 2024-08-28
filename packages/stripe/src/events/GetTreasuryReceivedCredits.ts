
                    import { EventHandler } from '@arkw/core';
                    import { treasury.received_creditFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryReceivedCredits: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-treasury.received_credit`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,financial_account,limit,linked_flows,starting_after,status,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/treasury/received_credits'].get({
                                query: {ending_before,expand,financial_account,limit,linked_flows,starting_after,status,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.received_credit`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.received_credit`,
                                properties: treasury.received_creditFields,
                            });
                        },
                })
                