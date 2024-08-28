
                    import { EventHandler } from '@arkw/core';
                    import { AttachmentArchiveMetadataReadableFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const expandAttachmentForHumans: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AttachmentArchiveMetadataReadable`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/attachment/{id}/expand/human'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AttachmentArchiveMetadataReadable`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AttachmentArchiveMetadataReadable`,
                                properties: AttachmentArchiveMetadataReadableFields,
                            });
                        },
                })
                