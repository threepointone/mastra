
                    import { EventHandler } from '@arkw/core';
                    import { V1PaymentFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrievePayment: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-V1Payment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,payment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/{location_id}/payments/{payment_id}'].get({
                                query: {location_id,payment_id,},
                                params: {location_id,payment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `V1Payment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `V1Payment`,
                                properties: V1PaymentFields,
                            });
                        },
                })
                