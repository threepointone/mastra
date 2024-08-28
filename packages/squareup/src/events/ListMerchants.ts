
                    import { EventHandler } from '@arkw/core';
                    import { ListMerchantsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListMerchants: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListMerchantsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/merchants'].get({
                                query: {cursor,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListMerchantsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListMerchantsResponse`,
                                properties: ListMerchantsResponseFields,
                            });
                        },
                })
                