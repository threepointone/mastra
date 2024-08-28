
                    import { EventHandler } from '@arkw/core';
                    import { consumerDisclosureFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientIdLangCode: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-consumerDisclosure`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,langCode,recipientId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/consumer_disclosure/{langCode}'].get({
                                query: {accountId,envelopeId,langCode,recipientId,langCode,},
                                params: {accountId,envelopeId,recipientId,langCode,} })

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
                