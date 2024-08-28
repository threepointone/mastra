
                    import { EventHandler } from '@arkw/core';
                    import { EnvelopeDocumentTabsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Tabs_GetDocumentTabs: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-EnvelopeDocumentTabs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,documentId,envelopeId,include_metadata,page_numbers, accountId,envelopeId,documentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs'].get({
                                query: {accountId,documentId,envelopeId,include_metadata,page_numbers,},
                                params: {accountId,envelopeId,documentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EnvelopeDocumentTabs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EnvelopeDocumentTabs`,
                                properties: EnvelopeDocumentTabsFields,
                            });
                        },
                })
                