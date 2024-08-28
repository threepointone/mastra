
                    import { EventHandler } from '@arkw/core';
                    import { CatalogsVerticalProductGroupFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const catalogs_product_groups: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-CatalogsVerticalProductGroup`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_catalogs_product_group_id,query_ad_account_id, product_group_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/catalogs/product_groups/{product_group_id}'].get({
                                query: {path_catalogs_product_group_id,query_ad_account_id,},
                                params: {product_group_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CatalogsVerticalProductGroup`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CatalogsVerticalProductGroup`,
                                properties: CatalogsVerticalProductGroupFields,
                            });
                        },
                })
                