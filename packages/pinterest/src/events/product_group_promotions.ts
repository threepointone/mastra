
                    import { EventHandler } from '@arkw/core';
                    import { ProductGroupPromotionResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const product_group_promotions: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProductGroupPromotionResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_product_group_promotion_id, ad_account_id,product_group_promotion_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/product_group_promotions/{product_group_promotion_id}'].get({
                                query: {path_ad_account_id,path_product_group_promotion_id,},
                                params: {ad_account_id,product_group_promotion_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProductGroupPromotionResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProductGroupPromotionResponse`,
                                properties: ProductGroupPromotionResponseFields,
                            });
                        },
                })
                