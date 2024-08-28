
                    import { EventHandler } from '@arkw/core';
                    import { templateInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Templates_GetDocumentTemplates: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-templateInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,documentId,envelopeId,include, accountId,envelopeId,documentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates'].get({
                                query: {accountId,documentId,envelopeId,include,},
                                params: {accountId,envelopeId,documentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `templateInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `templateInformation`,
                                properties: templateInformationFields,
                            });
                        },
                })
                