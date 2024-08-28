
                    import { EventHandler } from '@arkw/core';
                    import { FileVersion--FullFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_files_id_versions_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-FileVersion--Full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id,fields,file_version_id, file_id,file_version_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/files/{file_id}/versions/{file_version_id}'].get({
                                query: {file_id,fields,file_version_id,},
                                params: {file_id,file_version_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FileVersion--Full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FileVersion--Full`,
                                properties: FileVersion--FullFields,
                            });
                        },
                })
                