
                    import { EventHandler } from '@arkw/core';
                    import { pipeline_variableFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const PipelineVariableForWorkspace: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-pipeline_variable`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,variable_uuid, workspace,variable_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}'].get({
                                query: {workspace,variable_uuid,},
                                params: {workspace,variable_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pipeline_variable`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pipeline_variable`,
                                properties: pipeline_variableFields,
                            });
                        },
                })
                