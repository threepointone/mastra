
                    import { EventHandler } from '@arkw/core';
                    import { workflowFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-workflow: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workflow`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,workflow-id, owner,repo,workflow_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/workflows/{workflow_id}'].get({
                                query: {owner,repo,workflow-id,},
                                params: {owner,repo,workflow_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workflow`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workflow`,
                                properties: workflowFields,
                            });
                        },
                })
                