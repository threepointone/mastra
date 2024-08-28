
                    import { EventHandler } from '@arkw/core';
                    import { GetAllTagsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllTags: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetAllTagsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/tags'].get({
                                query: {ids,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllTagsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllTagsResponse`,
                                properties: GetAllTagsResponseFields,
                            });
                        },
                })
                