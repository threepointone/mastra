
                    import { EventHandler } from '@arkw/core';
                    import { EnvelopeDocumentTabsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Tabs_GetPageTabs: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EnvelopeDocumentTabs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,documentId,envelopeId,pageNumber, accountId,envelopeId,documentId,pageNumber,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}/tabs'].get({
                                query: {accountId,documentId,envelopeId,pageNumber,},
                                params: {accountId,envelopeId,documentId,pageNumber,} })

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
                