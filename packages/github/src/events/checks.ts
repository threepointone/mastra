
                    import { EventHandler } from '@arkw/core';
                    import { check-runFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const checks: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-check-run`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,check-run-id,check_run_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/check-runs/{check_run_id}'].get({
                                query: {owner,repo,check-run-id,},
                                params: {owner,repo,check_run_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `check-run`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `check-run`,
                                properties: check-runFields,
                            });
                        },
                })
                