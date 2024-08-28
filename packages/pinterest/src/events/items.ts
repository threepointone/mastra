
                    import { EventHandler } from '@arkw/core';
                    import { CatalogsItemsFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const items: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CatalogsItems`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_ad_account_id,query_catalogs_items_country,query_catalogs_items_language,query_catalogs_items,query_catalogs_items_filters,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/catalogs/items'].get({
                                query: {query_ad_account_id,query_catalogs_items_country,query_catalogs_items_language,query_catalogs_items,query_catalogs_items_filters,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CatalogsItems`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CatalogsItems`,
                                properties: CatalogsItemsFields,
                            });
                        },
                })
                