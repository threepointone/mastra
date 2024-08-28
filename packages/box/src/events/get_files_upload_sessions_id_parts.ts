
                    import { EventHandler } from '@arkw/core';
                    import { UploadPartsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_files_upload_sessions_id_parts: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-UploadParts`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { upload_session_id,offset,limit, upload_session_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/files/upload_sessions/{upload_session_id}/parts'].get({
                                query: {upload_session_id,offset,limit,},
                                params: {upload_session_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UploadParts`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UploadParts`,
                                properties: UploadPartsFields,
                            });
                        },
                })
                