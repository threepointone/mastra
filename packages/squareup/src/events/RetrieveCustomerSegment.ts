
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveCustomerSegmentResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveCustomerSegment: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveCustomerSegmentResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { segment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/customers/segments/{segment_id}'].get({
                                query: {segment_id,},
                                params: {segment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveCustomerSegmentResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveCustomerSegmentResponse`,
                                properties: RetrieveCustomerSegmentResponseFields,
                            });
                        },
                })
                