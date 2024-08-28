
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pipeline_stepsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const PipelineStepsForRepository: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_pipeline_steps`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,pipeline_uuid, workspace,repo_slug,pipeline_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps'].get({
                                query: {workspace,repo_slug,pipeline_uuid,},
                                params: {workspace,repo_slug,pipeline_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pipeline_steps`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pipeline_steps`,
                                properties: paginated_pipeline_stepsFields,
                            });
                        },
                })
                