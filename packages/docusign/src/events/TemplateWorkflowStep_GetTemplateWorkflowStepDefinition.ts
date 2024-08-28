
                    import { EventHandler } from '@arkw/core';
                    import { workflowStepFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const TemplateWorkflowStep_GetTemplateWorkflowStepDefinition: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workflowStep`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,templateId,workflowStepId, accountId,templateId,workflowStepId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}'].get({
                                query: {accountId,templateId,workflowStepId,},
                                params: {accountId,templateId,workflowStepId,} })

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
                