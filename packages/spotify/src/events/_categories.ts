
                    import { EventHandler } from '@arkw/core';
                    import { PagedCategoriesFields } from '../constants';
                    import { SpotifyIntegration } from '..';

                    export const _categories: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PagedCategories`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { country,locale,QueryLimit,QueryOffset, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/browse/categories'].get({
                                query: {country,locale,QueryLimit,QueryOffset,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PagedCategories`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PagedCategories`,
                                properties: PagedCategoriesFields,
                            });
                        },
                })
                