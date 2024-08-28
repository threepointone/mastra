
                    import { EventHandler } from '@arkw/core';
                    import { treasury.outbound_transferFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryOutboundTransfersOutboundTransfer: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.outbound_transfer`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,outbound_transfer, outbound_transfer,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/treasury/outbound_transfers/{outbound_transfer}'].get({
                                query: {expand,outbound_transfer,},
                                params: {outbound_transfer,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.outbound_transfer`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.outbound_transfer`,
                                properties: treasury.outbound_transferFields,
                            });
                        },
                })
                