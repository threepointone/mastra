
                    import { EventHandler } from '@arkw/core';
                    import { transferFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTransfersTransfer: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-transfer`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,transfer, transfer,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/transfers/{transfer}'].get({
                                query: {expand,transfer,},
                                params: {transfer,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `transfer`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `transfer`,
                                properties: transferFields,
                            });
                        },
                })
                