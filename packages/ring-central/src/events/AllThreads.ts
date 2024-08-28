
                    import { EventHandler } from '@arkw/core';
                    import { GetAllThreadsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllThreads: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetAllThreadsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,offset,limit, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/content_threads'].get({
                                query: {q,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllThreadsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllThreadsResponse`,
                                properties: GetAllThreadsResponseFields,
                            });
                        },
                })
                