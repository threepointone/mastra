
                    import { EventHandler } from '@arkw/core';
                    import { team-discussion-commentFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teams-discussion-comment-legacy: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-team-discussion-comment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team-id,discussion-number,comment-number, team_id,discussion_number,comment_number,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}'].get({
                                query: {team-id,discussion-number,comment-number,},
                                params: {team_id,discussion_number,comment_number,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `team-discussion-comment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `team-discussion-comment`,
                                properties: team-discussion-commentFields,
                            });
                        },
                })
                