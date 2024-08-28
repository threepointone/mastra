
                    import { EventHandler } from '@arkw/core';
                    import { ListCustomerSegmentsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListCustomerSegments: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListCustomerSegmentsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/customers/segments'].get({
                                query: {cursor,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListCustomerSegmentsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListCustomerSegmentsResponse`,
                                properties: ListCustomerSegmentsResponseFields,
                            });
                        },
                })
                