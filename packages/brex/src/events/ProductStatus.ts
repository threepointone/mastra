
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1api~1v1~1product~1order~1%7Bsku%7D~1%7BsubjectId%7D/post/responses/200Fields } from '../constants';
                    import { BrexIntegration } from '..';

                    export const ProductStatus: EventHandler<BrexIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1api~1v1~1product~1order~1%7Bsku%7D~1%7BsubjectId%7D/post/responses/200`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { orderId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/api/v1/product/status/{orderId}'].get({
                                query: {orderId,},
                                params: {orderId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1api~1v1~1product~1order~1%7Bsku%7D~1%7BsubjectId%7D/post/responses/200`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1api~1v1~1product~1order~1%7Bsku%7D~1%7BsubjectId%7D/post/responses/200`,
                                properties: #/paths/~1api~1v1~1product~1order~1%7Bsku%7D~1%7BsubjectId%7D/post/responses/200Fields,
                            });
                        },
                })
                