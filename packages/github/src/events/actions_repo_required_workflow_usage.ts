
                    import { EventHandler } from '@arkw/core';
                    import { workflow-usageFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_repo_required_workflow_usage: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workflow-usage`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,repo,repo-required-workflow-id,required_workflow_id_for_repo, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing'].get({
                                query: {org,repo,repo-required-workflow-id,},
                                params: {org,repo,required_workflow_id_for_repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workflow-usage`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workflow-usage`,
                                properties: workflow-usageFields,
                            });
                        },
                })
                