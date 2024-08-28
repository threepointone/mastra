
                    import { EventHandler } from '@arkw/core';
                    import { team-fullFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const teams_legacy: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-team-full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team-id,team_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/teams/{team_id}'].get({
                                query: {team-id,},
                                params: {team_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `team-full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `team-full`,
                                properties: team-fullFields,
                            });
                        },
                })
                