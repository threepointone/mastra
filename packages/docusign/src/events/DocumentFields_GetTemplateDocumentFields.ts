
                    import { EventHandler } from '@arkw/core';
                    import { documentFieldsInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const DocumentFields_GetTemplateDocumentFields: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-documentFieldsInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,documentId,templateId, accountId,templateId,documentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields'].get({
                                query: {accountId,documentId,templateId,},
                                params: {accountId,templateId,documentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `documentFieldsInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `documentFieldsInformation`,
                                properties: documentFieldsInformationFields,
                            });
                        },
                })
                