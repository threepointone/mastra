
                    import { EventHandler } from '@arkw/core';
                    import { workflow-run-usageFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_workflow_run_usage: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workflow-run-usage`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,run-id,run_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/runs/{run_id}/timing'].get({
                                query: {owner,repo,run-id,},
                                params: {owner,repo,run_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workflow-run-usage`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workflow-run-usage`,
                                properties: workflow-run-usageFields,
                            });
                        },
                })
                