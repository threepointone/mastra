
                    import { EventHandler } from '@arkw/core';
                    import { team-projectFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teamscheck-permissions-for-project-in-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-team-project`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,team-slug,project-id, org,team_slug,project_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/teams/{team_slug}/projects/{project_id}'].get({
                                query: {org,team-slug,project-id,},
                                params: {org,team_slug,project_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `team-project`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `team-project`,
                                properties: team-projectFields,
                            });
                        },
                })
                