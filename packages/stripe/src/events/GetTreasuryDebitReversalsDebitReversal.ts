
                    import { EventHandler } from '@arkw/core';
                    import { treasury.debit_reversalFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryDebitReversalsDebitReversal: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-treasury.debit_reversal`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { debit_reversal,expand, debit_reversal,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/treasury/debit_reversals/{debit_reversal}'].get({
                                query: {debit_reversal,expand,},
                                params: {debit_reversal,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.debit_reversal`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.debit_reversal`,
                                properties: treasury.debit_reversalFields,
                            });
                        },
                })
                