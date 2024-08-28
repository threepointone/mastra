
                    import { EventHandler } from '@arkw/core';
                    import { repo-required-workflowFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-repo-required-workflow: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-repo-required-workflow`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,repo,repo-required-workflow-id, org,repo,required_workflow_id_for_repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}'].get({
                                query: {org,repo,repo-required-workflow-id,},
                                params: {org,repo,required_workflow_id_for_repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `repo-required-workflow`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `repo-required-workflow`,
                                properties: repo-required-workflowFields,
                            });
                        },
                })
                