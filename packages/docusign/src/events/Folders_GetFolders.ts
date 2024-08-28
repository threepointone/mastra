
                    import { EventHandler } from '@arkw/core';
                    import { foldersResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Folders_GetFolders: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-foldersResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,count,include,include_items,start_position,sub_folder_depth,template,user_filter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/folders'].get({
                                query: {accountId,count,include,include_items,start_position,sub_folder_depth,template,user_filter,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `foldersResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `foldersResponse`,
                                properties: foldersResponseFields,
                            });
                        },
                })
                