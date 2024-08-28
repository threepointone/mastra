
                    import { EventHandler } from '@arkw/core';
                    import { WorkflowCapabilitiesFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const workflowCapabilities: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-WorkflowCapabilities`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workflowId,projectId,issueTypeId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/workflows/capabilities'].get({
                                query: {workflowId,projectId,issueTypeId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `WorkflowCapabilities`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `WorkflowCapabilities`,
                                properties: WorkflowCapabilitiesFields,
                            });
                        },
                })
                