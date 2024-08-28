
                    import { EventHandler } from '@arkw/core';
                    import { team-membershipFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teams-membership-for-user-in-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-team-membership`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,team-slug,username, org,team_slug,username,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/orgs/{org}/teams/{team_slug}/memberships/{username}'].get({
                                query: {org,team-slug,username,},
                                params: {org,team_slug,username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `team-membership`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `team-membership`,
                                properties: team-membershipFields,
                            });
                        },
                })
                