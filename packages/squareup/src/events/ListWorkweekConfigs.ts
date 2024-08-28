
                    import { EventHandler } from '@arkw/core';
                    import { ListWorkweekConfigsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListWorkweekConfigs: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListWorkweekConfigsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { limit,cursor,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/labor/workweek-configs'].get({
                                query: {limit,cursor,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListWorkweekConfigsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListWorkweekConfigsResponse`,
                                properties: ListWorkweekConfigsResponseFields,
                            });
                        },
                })
                