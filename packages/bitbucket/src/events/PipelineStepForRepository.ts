
                    import { EventHandler } from '@arkw/core';
                    import { pipeline_stepFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const PipelineStepForRepository: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-pipeline_step`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,pipeline_uuid,step_uuid, workspace,repo_slug,pipeline_uuid,step_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}'].get({
                                query: {workspace,repo_slug,pipeline_uuid,step_uuid,},
                                params: {workspace,repo_slug,pipeline_uuid,step_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pipeline_step`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pipeline_step`,
                                properties: pipeline_stepFields,
                            });
                        },
                })
                