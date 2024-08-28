
                    import { EventHandler } from '@arkw/core';
                    import { externalFolderFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const CloudStorageFolder_GetCloudStorageFolder: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-externalFolder`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,folderId,serviceId,userId,cloud_storage_folder_path,cloud_storage_folderid_plain,count,order,order_by,search_text,start_position, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}/folders/{folderId}'].get({
                                query: {accountId,folderId,serviceId,userId,cloud_storage_folder_path,cloud_storage_folderid_plain,count,order,order_by,search_text,start_position,},
                                params: {accountId,userId,serviceId,folderId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `externalFolder`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `externalFolder`,
                                properties: externalFolderFields,
                            });
                        },
                })
                