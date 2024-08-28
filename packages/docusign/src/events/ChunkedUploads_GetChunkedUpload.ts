
                    import { EventHandler } from '@arkw/core';
                    import { chunkedUploadResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const ChunkedUploads_GetChunkedUpload: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-chunkedUploadResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,chunkedUploadId,include, accountId,chunkedUploadId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}'].get({
                                query: {accountId,chunkedUploadId,include,},
                                params: {accountId,chunkedUploadId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `chunkedUploadResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `chunkedUploadResponse`,
                                properties: chunkedUploadResponseFields,
                            });
                        },
                })
                