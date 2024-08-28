
                    import { EventHandler } from '@arkw/core';
                    import { File--FullFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_files_id#get_shared_link: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-File--Full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id,fields, file_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/files/{file_id}#get_shared_link'].get({
                                query: {file_id,fields,},
                                params: {file_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `File--Full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `File--Full`,
                                properties: File--FullFields,
                            });
                        },
                })
                