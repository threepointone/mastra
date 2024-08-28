
                    import { EventHandler } from '@arkw/core';
                    import { DocumentsFolderListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listDocumentFolders: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-DocumentsFolderListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { parent_uuid,count,page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/public/v1/documents/folders'].get({
                                query: {parent_uuid,count,page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DocumentsFolderListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DocumentsFolderListResponse`,
                                properties: DocumentsFolderListResponseFields,
                            });
                        },
                })
                