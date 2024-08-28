
                    import { EventHandler } from '@arkw/core';
                    import { TrashFolderFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _folders_id_trash: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TrashFolder`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { folder_id,fields, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/folders/{folder_id}/trash'].get({
                                query: {folder_id,fields,},
                                params: {folder_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TrashFolder`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TrashFolder`,
                                properties: TrashFolderFields,
                            });
                        },
                })
                