
                    import { EventHandler } from '@arkw/core';
                    import { workspaceFolderContentsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const WorkspaceFolder_GetWorkspaceFolder: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workspaceFolderContents`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,folderId,workspaceId,count,include_files,include_sub_folders,include_thumbnails,include_user_detail,start_position,workspace_user_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}'].get({
                                query: {accountId,folderId,workspaceId,count,include_files,include_sub_folders,include_thumbnails,include_user_detail,start_position,workspace_user_id,},
                                params: {accountId,workspaceId,folderId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workspaceFolderContents`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workspaceFolderContents`,
                                properties: workspaceFolderContentsFields,
                            });
                        },
                })
                