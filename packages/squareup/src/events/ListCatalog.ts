
                    import { EventHandler } from '@arkw/core';
                    import { ListCatalogResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListCatalog: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListCatalogResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,types,catalog_version,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/catalog/list'].get({
                                query: {cursor,types,catalog_version,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListCatalogResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListCatalogResponse`,
                                properties: ListCatalogResponseFields,
                            });
                        },
                })
                