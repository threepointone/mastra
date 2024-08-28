
                    import { EventHandler } from '@arkw/core';
                    import { ContainerOfWorkflowSchemeAssociationsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const WorkflowSchemeProjectAssociations: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ContainerOfWorkflowSchemeAssociations`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectId,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/workflowscheme/project'].get({
                                query: {projectId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ContainerOfWorkflowSchemeAssociations`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ContainerOfWorkflowSchemeAssociations`,
                                properties: ContainerOfWorkflowSchemeAssociationsFields,
                            });
                        },
                })
                