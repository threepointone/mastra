
                    import { EventHandler } from '@arkw/core';
                    import { documentVisibilityListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Recipients_GetRecipientDocumentVisibility: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-documentVisibilityList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,recipientId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/document_visibility'].get({
                                query: {accountId,envelopeId,recipientId,},
                                params: {accountId,envelopeId,recipientId,} })

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
                