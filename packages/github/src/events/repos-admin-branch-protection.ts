
                    import { EventHandler } from '@arkw/core';
                    import { protected-branch-admin-enforcedFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-admin-branch-protection: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-protected-branch-admin-enforced`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,branch, owner,repo,branch,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'].get({
                                query: {owner,repo,branch,},
                                params: {owner,repo,branch,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `protected-branch-admin-enforced`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `protected-branch-admin-enforced`,
                                properties: protected-branch-admin-enforcedFields,
                            });
                        },
                })
                