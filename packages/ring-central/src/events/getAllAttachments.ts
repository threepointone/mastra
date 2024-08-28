
                    import { EventHandler } from '@arkw/core';
                    import { GetAllAttachmentsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getAllAttachments: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllAttachmentsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { offset,limit,extension,created_before,created_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/attachments'].get({
                                query: {offset,limit,extension,created_before,created_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllAttachmentsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllAttachmentsResponse`,
                                properties: GetAllAttachmentsResponseFields,
                            });
                        },
                })
                