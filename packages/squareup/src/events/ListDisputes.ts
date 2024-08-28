
                    import { EventHandler } from '@arkw/core';
                    import { ListDisputesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListDisputes: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListDisputesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,states,location_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/disputes'].get({
                                query: {cursor,states,location_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListDisputesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListDisputesResponse`,
                                properties: ListDisputesResponseFields,
                            });
                        },
                })
                