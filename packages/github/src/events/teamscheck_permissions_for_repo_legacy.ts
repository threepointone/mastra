
                    import { EventHandler } from '@arkw/core';
                    import { team-repositoryFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teamscheck_permissions_for_repo_legacy: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-team-repository`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team-id,owner,repo,team_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/teams/{team_id}/repos/{owner}/{repo}'].get({
                                query: {team-id,owner,repo,},
                                params: {team_id,owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `team-repository`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `team-repository`,
                                properties: team-repositoryFields,
                            });
                        },
                })
                