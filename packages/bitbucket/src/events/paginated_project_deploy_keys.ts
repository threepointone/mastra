
                    import { EventHandler } from '@arkw/core';
                    import { paginated_project_deploy_keysFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_project_deploy_keys: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_project_deploy_keys`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,project_key,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workspaces/{workspace}/projects/{project_key}/deploy-keys'].get({
                                
                                params: {workspace,project_key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_project_deploy_keys`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_project_deploy_keys`,
                                properties: paginated_project_deploy_keysFields,
                            });
                        },
                })
                