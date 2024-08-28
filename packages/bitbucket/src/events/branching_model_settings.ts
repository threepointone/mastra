
                    import { EventHandler } from '@arkw/core';
                    import { branching_model_settingsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const branching_model_settings: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-branching_model_settings`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,project_key,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workspaces/{workspace}/projects/{project_key}/branching-model/settings'].get({
                                
                                params: {workspace,project_key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `branching_model_settings`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `branching_model_settings`,
                                properties: branching_model_settingsFields,
                            });
                        },
                })
                