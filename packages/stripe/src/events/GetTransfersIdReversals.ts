
                    import { EventHandler } from '@arkw/core';
                    import { transfer_reversalFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTransfersIdReversals: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-transfer_reversal`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,id,limit,starting_after, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/transfers/{id}/reversals'].get({
                                query: {ending_before,expand,id,limit,starting_after,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `transfer_reversal`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `transfer_reversal`,
                                properties: transfer_reversalFields,
                            });
                        },
                })
                