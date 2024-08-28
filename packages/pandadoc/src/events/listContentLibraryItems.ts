
                    import { EventHandler } from '@arkw/core';
                    import { ContentLibraryItemListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listContentLibraryItems: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ContentLibraryItemListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,id,deleted,folder_uuid,count,page,tag, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/content-library-items'].get({
                                query: {q,id,deleted,folder_uuid,count,page,tag,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ContentLibraryItemListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ContentLibraryItemListResponse`,
                                properties: ContentLibraryItemListResponseFields,
                            });
                        },
                })
                