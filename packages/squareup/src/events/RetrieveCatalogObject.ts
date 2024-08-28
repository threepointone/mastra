
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveCatalogObjectResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveCatalogObject: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveCatalogObjectResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { object_id,include_related_objects,catalog_version, object_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/catalog/object/{object_id}'].get({
                                query: {object_id,include_related_objects,catalog_version,},
                                params: {object_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveCatalogObjectResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveCatalogObjectResponse`,
                                properties: RetrieveCatalogObjectResponseFields,
                            });
                        },
                })
                