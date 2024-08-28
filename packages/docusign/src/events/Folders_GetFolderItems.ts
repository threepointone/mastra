
                    import { EventHandler } from '@arkw/core';
                    import { folderItemsResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Folders_GetFolderItems: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-folderItemsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,folderId,from_date,include_items,owner_email,owner_name,search_text,start_position,status,to_date, accountId,folderId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/folders/{folderId}'].get({
                                query: {accountId,folderId,from_date,include_items,owner_email,owner_name,search_text,start_position,status,to_date,},
                                params: {accountId,folderId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `folderItemsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `folderItemsResponse`,
                                properties: folderItemsResponseFields,
                            });
                        },
                })
                