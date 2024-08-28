
                    import { EventHandler } from '@arkw/core';
                    import { consumerDisclosureFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-consumerDisclosure`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,recipientId,langCode, accountId,envelopeId,recipientId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/consumer_disclosure'].get({
                                query: {accountId,envelopeId,recipientId,langCode,},
                                params: {accountId,envelopeId,recipientId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `consumerDisclosure`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `consumerDisclosure`,
                                properties: consumerDisclosureFields,
                            });
                        },
                })
                