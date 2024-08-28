
                    import { EventHandler } from '@arkw/core';
                    import { Folder--FullFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_folders_id#get_shared_link: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Folder--Full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { folder_id,fields, folder_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/folders/{folder_id}#get_shared_link'].get({
                                query: {folder_id,fields,},
                                params: {folder_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Folder--Full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Folder--Full`,
                                properties: Folder--FullFields,
                            });
                        },
                })
                