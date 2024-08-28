
                    import { EventHandler } from '@arkw/core';
                    import { pageImagesFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const WorkspaceFilePages_GetWorkspaceFilePages: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pageImages`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,fileId,folderId,workspaceId,count,dpi,max_height,max_width,start_position, accountId,workspaceId,folderId,fileId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}/pages'].get({
                                query: {accountId,fileId,folderId,workspaceId,count,dpi,max_height,max_width,start_position,},
                                params: {accountId,workspaceId,folderId,fileId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pageImages`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pageImages`,
                                properties: pageImagesFields,
                            });
                        },
                })
                