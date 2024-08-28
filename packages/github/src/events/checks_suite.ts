
                    import { EventHandler } from '@arkw/core';
                    import { check-suiteFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const checks_suite: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-check-suite`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,check-suite-id,check_suite_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/check-suites/{check_suite_id}'].get({
                                query: {owner,repo,check-suite-id,},
                                params: {owner,repo,check_suite_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `check-suite`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `check-suite`,
                                properties: check-suiteFields,
                            });
                        },
                })
                