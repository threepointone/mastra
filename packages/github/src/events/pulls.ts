
                    import { EventHandler } from '@arkw/core';
                    import { pull-requestFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const pulls: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pull-request`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,pull-number,pull_number, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/pulls/{pull_number}'].get({
                                query: {owner,repo,pull-number,},
                                params: {owner,repo,pull_number,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pull-request`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pull-request`,
                                properties: pull-requestFields,
                            });
                        },
                })
                