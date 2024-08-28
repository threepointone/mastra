
                    import { EventHandler } from '@arkw/core';
                    import { OneCategoryFields } from '../constants';
                    import { SpotifyIntegration } from '..';

                    export const _a_category: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-OneCategory`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { category_id,country,locale, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/browse/categories/{category_id}'].get({
                                query: {category_id,country,locale,},
                                params: {category_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `OneCategory`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `OneCategory`,
                                properties: OneCategoryFields,
                            });
                        },
                })
                