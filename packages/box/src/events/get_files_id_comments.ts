
                    import { EventHandler } from '@arkw/core';
                    import { CommentsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_files_id_comments: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Comments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id,fields,limit,offset, file_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/files/{file_id}/comments'].get({
                                query: {file_id,fields,limit,offset,},
                                params: {file_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Comments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Comments`,
                                properties: CommentsFields,
                            });
                        },
                })
                