
                    import { EventHandler } from '@arkw/core';
                    import { CatalogsProductGroupProductCountsVerticalFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const catalogs_product_groupsproduct_counts_: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CatalogsProductGroupProductCountsVertical`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_catalogs_product_group_id,query_ad_account_id, product_group_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/catalogs/product_groups/{product_group_id}/product_counts'].get({
                                query: {path_catalogs_product_group_id,query_ad_account_id,},
                                params: {product_group_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CatalogsProductGroupProductCountsVertical`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CatalogsProductGroupProductCountsVertical`,
                                properties: CatalogsProductGroupProductCountsVerticalFields,
                            });
                        },
                })
                