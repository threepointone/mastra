
                    import { EventHandler } from '@arkw/core';
                    import { treasury.credit_reversalFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryCreditReversalsCreditReversal: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.credit_reversal`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { credit_reversal,expand, credit_reversal,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/treasury/credit_reversals/{credit_reversal}'].get({
                                query: {credit_reversal,expand,},
                                params: {credit_reversal,} })

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
                