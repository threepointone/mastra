
                    import { EventHandler } from '@arkw/core';
                    import { V1OrderFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveOrder: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-V1Order`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,order_id, location_id,order_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/{location_id}/orders/{order_id}'].get({
                                query: {location_id,order_id,},
                                params: {location_id,order_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `V1Order`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `V1Order`,
                                properties: V1OrderFields,
                            });
                        },
                })
                