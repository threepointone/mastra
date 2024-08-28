
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveInventoryChangesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveInventoryChanges: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveInventoryChangesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { catalog_object_id,location_ids,cursor, catalog_object_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/inventory/{catalog_object_id}/changes'].get({
                                query: {catalog_object_id,location_ids,cursor,},
                                params: {catalog_object_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveInventoryChangesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveInventoryChangesResponse`,
                                properties: RetrieveInventoryChangesResponseFields,
                            });
                        },
                })
                