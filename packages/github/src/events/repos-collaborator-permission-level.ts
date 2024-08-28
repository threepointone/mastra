
                    import { EventHandler } from '@arkw/core';
                    import { repository-collaborator-permissionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-collaborator-permission-level: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-repository-collaborator-permission`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,username, owner,repo,username,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/collaborators/{username}/permission'].get({
                                query: {owner,repo,username,},
                                params: {owner,repo,username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `repository-collaborator-permission`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `repository-collaborator-permission`,
                                properties: repository-collaborator-permissionFields,
                            });
                        },
                })
                