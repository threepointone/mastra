
                    import { EventHandler } from '@arkw/core';
                    import { EnvelopeRecipientTabsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Recipients_GetRecipientTabs: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EnvelopeRecipientTabs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,recipientId,include_anchor_tab_locations,include_metadata, accountId,envelopeId,recipientId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs'].get({
                                query: {accountId,envelopeId,recipientId,include_anchor_tab_locations,include_metadata,},
                                params: {accountId,envelopeId,recipientId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EnvelopeRecipientTabs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EnvelopeRecipientTabs`,
                                properties: EnvelopeRecipientTabsFields,
                            });
                        },
                })
                