
                    import { EventHandler } from '@arkw/core';
                    import { treasury.inbound_transferFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryInboundTransfersId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.inbound_transfer`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/treasury/inbound_transfers/{id}'].get({
                                query: {expand,id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.inbound_transfer`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.inbound_transfer`,
                                properties: treasury.inbound_transferFields,
                            });
                        },
                })
                