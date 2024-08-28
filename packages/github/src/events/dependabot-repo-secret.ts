
                    import { EventHandler } from '@arkw/core';
                    import { dependabot-secretFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const dependabot-repo-secret: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-dependabot-secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,secret-name, owner,repo,secret_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/dependabot/secrets/{secret_name}'].get({
                                query: {owner,repo,secret-name,},
                                params: {owner,repo,secret_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `dependabot-secret`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `dependabot-secret`,
                                properties: dependabot-secretFields,
                            });
                        },
                })
                