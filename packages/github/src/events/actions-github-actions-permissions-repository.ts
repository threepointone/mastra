
                    import { EventHandler } from '@arkw/core';
                    import { actions-repository-permissionsFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-github-actions-permissions-repository: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-actions-repository-permissions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo, owner,repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/actions/permissions'].get({
                                query: {owner,repo,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-repository-permissions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-repository-permissions`,
                                properties: actions-repository-permissionsFields,
                            });
                        },
                })
                