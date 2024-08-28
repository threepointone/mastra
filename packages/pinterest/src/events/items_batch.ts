
                    import { EventHandler } from '@arkw/core';
                    import { CatalogsItemsBatchFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const items_batch: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CatalogsItemsBatch`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_catalogs_items_batch_id,query_ad_account_id,batch_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/catalogs/items/batch/{batch_id}'].get({
                                query: {path_catalogs_items_batch_id,query_ad_account_id,},
                                params: {batch_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CatalogsItemsBatch`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CatalogsItemsBatch`,
                                properties: CatalogsItemsBatchFields,
                            });
                        },
                })
                