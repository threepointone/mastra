
                    import { EventHandler } from '@arkw/core';
                    import { scheduledSendingFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const EnvelopeWorkflowScheduledSending_GetEnvelopeScheduledSendingDefinition: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-scheduledSending`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/scheduledSending'].get({
                                query: {accountId,envelopeId,},
                                params: {accountId,envelopeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `scheduledSending`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `scheduledSending`,
                                properties: scheduledSendingFields,
                            });
                        },
                })
                