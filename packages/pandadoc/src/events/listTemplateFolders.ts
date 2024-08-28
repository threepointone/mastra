
                    import { EventHandler } from '@arkw/core';
                    import { TemplatesFolderListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listTemplateFolders: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TemplatesFolderListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { parent_uuid,count,page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/templates/folders'].get({
                                query: {parent_uuid,count,page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TemplatesFolderListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TemplatesFolderListResponse`,
                                properties: TemplatesFolderListResponseFields,
                            });
                        },
                })
                