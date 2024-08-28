
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pipeline_schedule_executionsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const RepositoryPipelineScheduleExecutions: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_pipeline_schedule_executions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,schedule_uuid, workspace,repo_slug,schedule_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions'].get({
                                query: {workspace,repo_slug,schedule_uuid,},
                                params: {workspace,repo_slug,schedule_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pipeline_schedule_executions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pipeline_schedule_executions`,
                                properties: paginated_pipeline_schedule_executionsFields,
                            });
                        },
                })
                