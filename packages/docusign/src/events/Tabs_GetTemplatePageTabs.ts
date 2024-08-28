
                    import { EventHandler } from '@arkw/core';
                    import { TemplateDocumentTabsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Tabs_GetTemplatePageTabs: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TemplateDocumentTabs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,documentId,pageNumber,templateId, accountId,templateId,documentId,pageNumber,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/tabs'].get({
                                query: {accountId,documentId,pageNumber,templateId,},
                                params: {accountId,templateId,documentId,pageNumber,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TemplateDocumentTabs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TemplateDocumentTabs`,
                                properties: TemplateDocumentTabsFields,
                            });
                        },
                })
                