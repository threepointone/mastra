
                    import { EventHandler } from '@arkw/core';
                    import { milestoneFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const issues-milestone: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-milestone`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,milestone-number, owner,repo,milestone_number,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/milestones/{milestone_number}'].get({
                                query: {owner,repo,milestone-number,},
                                params: {owner,repo,milestone_number,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `milestone`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `milestone`,
                                properties: milestoneFields,
                            });
                        },
                })
                