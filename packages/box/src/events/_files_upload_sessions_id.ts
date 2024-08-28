
                    import { EventHandler } from '@arkw/core';
                    import { UploadSessionFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _files_upload_sessions_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UploadSession`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { upload_session_id, upload_session_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/files/upload_sessions/{upload_session_id}'].get({
                                query: {upload_session_id,},
                                params: {upload_session_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UploadSession`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UploadSession`,
                                properties: UploadSessionFields,
                            });
                        },
                })
                