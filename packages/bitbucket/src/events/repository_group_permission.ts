
                    import { EventHandler } from '@arkw/core';
                    import { repository_group_permissionFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const repository_group_permission: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-repository_group_permission`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,group_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}'].get({
                                
                                params: {workspace,repo_slug,group_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `repository_group_permission`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `repository_group_permission`,
                                properties: repository_group_permissionFields,
                            });
                        },
                })
                