
                    import { EventHandler } from '@arkw/core';
                    import { delayedRoutingFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const TemplateWorkflowDelayedRouting_GetTemplateDelayedRoutingDefinition: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-delayedRouting`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,templateId,workflowStepId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}/delayedRouting'].get({
                                query: {accountId,templateId,workflowStepId,},
                                params: {accountId,templateId,workflowStepId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `delayedRouting`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `delayedRouting`,
                                properties: delayedRoutingFields,
                            });
                        },
                })
                