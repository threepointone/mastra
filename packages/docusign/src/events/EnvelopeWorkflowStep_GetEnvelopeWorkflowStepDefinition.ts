
                    import { EventHandler } from '@arkw/core';
                    import { workflowStepFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const EnvelopeWorkflowStep_GetEnvelopeWorkflowStepDefinition: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workflowStep`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,workflowStepId, accountId,envelopeId,workflowStepId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps/{workflowStepId}'].get({
                                query: {accountId,envelopeId,workflowStepId,},
                                params: {accountId,envelopeId,workflowStepId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workflowStep`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workflowStep`,
                                properties: workflowStepFields,
                            });
                        },
                })
                