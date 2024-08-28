
                    import { EventHandler } from '@arkw/core';
                    import { project_deploy_keyFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const project_deploy_key: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-project_deploy_key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,project_key,key_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}'].get({
                                
                                params: {workspace,project_key,key_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `project_deploy_key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `project_deploy_key`,
                                properties: project_deploy_keyFields,
                            });
                        },
                })
                