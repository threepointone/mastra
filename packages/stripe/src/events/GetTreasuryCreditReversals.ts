
                    import { EventHandler } from '@arkw/core';
                    import { treasury.credit_reversalFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryCreditReversals: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.credit_reversal`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,financial_account,limit,received_credit,starting_after,status,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/treasury/credit_reversals'].get({
                                query: {ending_before,expand,financial_account,limit,received_credit,starting_after,status,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.credit_reversal`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.credit_reversal`,
                                properties: treasury.credit_reversalFields,
                            });
                        },
                })
                