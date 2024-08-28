
                    import { EventHandler } from '@arkw/core';
                    import { DocumentListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listDocuments: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-DocumentListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { completed_from,completed_to,contact_id,count,created_from,created_to,deleted,id,folder_uuid,form_id,membership_id,metadata,modified_from,modified_to,order_by,page,q,status,status__ne,tag,template_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/documents'].get({
                                query: {completed_from,completed_to,contact_id,count,created_from,created_to,deleted,id,folder_uuid,form_id,membership_id,metadata,modified_from,modified_to,order_by,page,q,status,status__ne,tag,template_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DocumentListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DocumentListResponse`,
                                properties: DocumentListResponseFields,
                            });
                        },
                })
                