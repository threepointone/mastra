
                    import { EventHandler } from '@arkw/core';
                    import { documentVisibilityListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Recipients_GetTemplateRecipientDocumentVisibility: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-documentVisibilityList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,recipientId,templateId, accountId,templateId,recipientId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/document_visibility'].get({
                                query: {accountId,recipientId,templateId,},
                                params: {accountId,templateId,recipientId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `documentVisibilityList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `documentVisibilityList`,
                                properties: documentVisibilityListFields,
                            });
                        },
                })
                