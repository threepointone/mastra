
                    import { EventHandler } from '@arkw/core';
                    import { EnvelopeRecipientsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Recipients_GetRecipients: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EnvelopeRecipients`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,include_anchor_tab_locations,include_extended,include_metadata,include_tabs, accountId,envelopeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients'].get({
                                query: {accountId,envelopeId,include_anchor_tab_locations,include_extended,include_metadata,include_tabs,},
                                params: {accountId,envelopeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EnvelopeRecipients`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EnvelopeRecipients`,
                                properties: EnvelopeRecipientsFields,
                            });
                        },
                })
                