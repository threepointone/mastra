
                    import { EventHandler } from '@arkw/core';
                    import { CatalogsFeedFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const feeds: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CatalogsFeed`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_catalogs_feed_id,query_ad_account_id,feed_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/catalogs/feeds/{feed_id}'].get({
                                query: {path_catalogs_feed_id,query_ad_account_id,},
                                params: {feed_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CatalogsFeed`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CatalogsFeed`,
                                properties: CatalogsFeedFields,
                            });
                        },
                })
                