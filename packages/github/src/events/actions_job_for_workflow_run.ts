
                    import { EventHandler } from '@arkw/core';
                    import { jobFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_job_for_workflow_run: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-job`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,job-id,job_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/jobs/{job_id}'].get({
                                query: {owner,repo,job-id,},
                                params: {owner,repo,job_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `job`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `job`,
                                properties: jobFields,
                            });
                        },
                })
                