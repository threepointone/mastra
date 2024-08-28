
                    import { EventHandler } from '@arkw/core';
                    import { ItemsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _collections_id_items: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Items`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { collection_id,fields,offset,limit, collection_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/collections/{collection_id}/items'].get({
                                query: {collection_id,fields,offset,limit,},
                                params: {collection_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Items`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Items`,
                                properties: ItemsFields,
                            });
                        },
                })
                