
                    import { EventHandler } from '@arkw/core';
                    import { team-discussionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teams-discussion-legacy: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-team-discussion`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team-id,discussion-number, team_id,discussion_number,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/teams/{team_id}/discussions/{discussion_number}'].get({
                                query: {team-id,discussion-number,},
                                params: {team_id,discussion_number,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `team-discussion`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `team-discussion`,
                                properties: team-discussionFields,
                            });
                        },
                })
                