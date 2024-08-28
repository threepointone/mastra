
                    import { EventHandler } from '@arkw/core';
                    import { required-workflowFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-required-workflow: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-required-workflow`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,required-workflow-id, org,required_workflow_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/actions/required_workflows/{required_workflow_id}'].get({
                                query: {org,required-workflow-id,},
                                params: {org,required_workflow_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `required-workflow`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `required-workflow`,
                                properties: required-workflowFields,
                            });
                        },
                })
                