
                    import { EventHandler } from '@arkw/core';
                    import { repository_user_permissionFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const repository_user_permission: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-repository_user_permission`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,selected_user_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}'].get({
                                
                                params: {workspace,repo_slug,selected_user_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `repository_user_permission`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `repository_user_permission`,
                                properties: repository_user_permissionFields,
                            });
                        },
                })
                