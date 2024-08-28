
                    import { EventHandler } from '@arkw/core';
                    import { EstimateItemCategoriesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listEstimateItemCategories: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-EstimateItemCategories`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { updated_since,page,cursor,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/estimate_item_categories'].get({
                                query: {updated_since,page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EstimateItemCategories`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EstimateItemCategories`,
                                properties: EstimateItemCategoriesFields,
                            });
                        },
                })
                