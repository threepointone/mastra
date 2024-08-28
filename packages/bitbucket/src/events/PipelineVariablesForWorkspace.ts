
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pipeline_variablesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const PipelineVariablesForWorkspace: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_pipeline_variables`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace, workspace,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workspaces/{workspace}/pipelines-config/variables'].get({
                                query: {workspace,},
                                params: {workspace,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pipeline_variables`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pipeline_variables`,
                                properties: paginated_pipeline_variablesFields,
                            });
                        },
                })
                