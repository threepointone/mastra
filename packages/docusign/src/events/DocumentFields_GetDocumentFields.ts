
                    import { EventHandler } from '@arkw/core';
                    import { EnvelopeDocumentFieldsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const DocumentFields_GetDocumentFields: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EnvelopeDocumentFields`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,documentId,envelopeId, accountId,envelopeId,documentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields'].get({
                                query: {accountId,documentId,envelopeId,},
                                params: {accountId,envelopeId,documentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EnvelopeDocumentFields`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EnvelopeDocumentFields`,
                                properties: EnvelopeDocumentFieldsFields,
                            });
                        },
                })
                