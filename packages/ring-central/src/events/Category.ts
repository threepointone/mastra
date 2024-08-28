
                    import { EventHandler } from '@arkw/core';
                    import { CategoryFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Category: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Category`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { categoryId, categoryId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/categories/{categoryId}'].get({
                                query: {categoryId,},
                                params: {categoryId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Category`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Category`,
                                properties: CategoryFields,
                            });
                        },
                })
                