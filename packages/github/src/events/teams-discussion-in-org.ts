
                    import { EventHandler } from '@arkw/core';
                    import { team-discussionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teams-discussion-in-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-team-discussion`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,team-slug,discussion-number, org,team_slug,discussion_number,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'].get({
                                query: {org,team-slug,discussion-number,},
                                params: {org,team_slug,discussion_number,} })

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
                