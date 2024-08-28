
                    import { EventHandler } from '@arkw/core';
                    import { FolderFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Folder: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Folder`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { folderId, folderId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/folders/{folderId}'].get({
                                query: {folderId,},
                                params: {folderId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Folder`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Folder`,
                                properties: FolderFields,
                            });
                        },
                })
                