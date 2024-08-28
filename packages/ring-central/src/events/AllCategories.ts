
                    import { EventHandler } from '@arkw/core';
                    import { GetAllCategoriesResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllCategories: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetAllCategoriesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,parent_id,offset,limit, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/categories'].get({
                                query: {ids,parent_id,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllCategoriesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllCategoriesResponse`,
                                properties: GetAllCategoriesResponseFields,
                            });
                        },
                })
                