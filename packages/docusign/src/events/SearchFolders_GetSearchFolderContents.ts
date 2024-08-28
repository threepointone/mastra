
                    import { EventHandler } from '@arkw/core';
                    import { folderItemResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const SearchFolders_GetSearchFolderContents: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-folderItemResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,searchFolderId,all,count,from_date,include_recipients,order,order_by,start_position,to_date, accountId,searchFolderId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/search_folders/{searchFolderId}'].get({
                                query: {accountId,searchFolderId,all,count,from_date,include_recipients,order,order_by,start_position,to_date,},
                                params: {accountId,searchFolderId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `folderItemResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `folderItemResponse`,
                                properties: folderItemResponseFields,
                            });
                        },
                })
                