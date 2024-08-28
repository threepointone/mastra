
                    import { EventHandler } from '@arkw/core';
                    import { team-membershipFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teams_membership_for_user_legacy: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-team-membership`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team-id,username,team_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/teams/{team_id}/memberships/{username}'].get({
                                query: {team-id,username,},
                                params: {team_id,username,} })

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
                