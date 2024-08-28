
                    import { EventHandler } from '@arkw/core';
                    import { EstimateItemCategoryFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveEstimateItemCategory: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EstimateItemCategory`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { estimateItemCategoryId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/estimate_item_categories/{estimateItemCategoryId}'].get({
                                query: {estimateItemCategoryId,},
                                params: {estimateItemCategoryId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EstimateItemCategory`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EstimateItemCategory`,
                                properties: EstimateItemCategoryFields,
                            });
                        },
                })
                