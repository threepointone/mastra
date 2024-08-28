
                    import { EventHandler } from '@arkw/core';
                    import { DocumentAttachmentResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const detailsDocumentAttachment: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-DocumentAttachmentResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,attachment_id, id,attachment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/documents/{id}/attachments/{attachment_id}'].get({
                                query: {id,attachment_id,},
                                params: {id,attachment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DocumentAttachmentResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DocumentAttachmentResponse`,
                                properties: DocumentAttachmentResponseFields,
                            });
                        },
                })
                