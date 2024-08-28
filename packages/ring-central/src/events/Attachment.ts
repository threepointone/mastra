
                    import { EventHandler } from '@arkw/core';
                    import { AttachmentFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Attachment: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Attachment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { attachmentId, attachmentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/attachments/{attachmentId}'].get({
                                query: {attachmentId,},
                                params: {attachmentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Attachment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Attachment`,
                                properties: AttachmentFields,
                            });
                        },
                })
                