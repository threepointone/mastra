
                    import { EventHandler } from '@arkw/core';
                    import { userSignatureFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Recipients_GetRecipientSignature: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-userSignature`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,recipientId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/signature'].get({
                                query: {accountId,envelopeId,recipientId,},
                                params: {accountId,envelopeId,recipientId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userSignature`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userSignature`,
                                properties: userSignatureFields,
                            });
                        },
                })
                