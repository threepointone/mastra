
                    import { EventHandler } from '@arkw/core';
                    import { community-profileFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-community-profile-metrics: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-community-profile`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo, owner,repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/community/profile'].get({
                                query: {owner,repo,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `community-profile`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `community-profile`,
                                properties: community-profileFields,
                            });
                        },
                })
                