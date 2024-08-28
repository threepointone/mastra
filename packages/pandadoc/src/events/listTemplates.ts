
                    import { EventHandler } from '@arkw/core';
                    import { TemplateListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listTemplates: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TemplateListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,shared,deleted,count,page,id,folder_uuid,tag,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/templates'].get({
                                query: {q,shared,deleted,count,page,id,folder_uuid,tag,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TemplateListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TemplateListResponse`,
                                properties: TemplateListResponseFields,
                            });
                        },
                })
                