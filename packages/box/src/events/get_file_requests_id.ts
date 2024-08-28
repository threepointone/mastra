
                    import { EventHandler } from '@arkw/core';
                    import { FileRequestFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_file_requests_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-FileRequest`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_request_id, file_request_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/file_requests/{file_request_id}'].get({
                                query: {file_request_id,},
                                params: {file_request_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FileRequest`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FileRequest`,
                                properties: FileRequestFields,
                            });
                        },
                })
                