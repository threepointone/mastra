
                    import { EventHandler } from '@arkw/core';
                    import { pipeline_scheduleFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const RepositoryPipelineSchedule: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-pipeline_schedule`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,schedule_uuid, workspace,repo_slug,schedule_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}'].get({
                                query: {workspace,repo_slug,schedule_uuid,},
                                params: {workspace,repo_slug,schedule_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pipeline_schedule`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pipeline_schedule`,
                                properties: pipeline_scheduleFields,
                            });
                        },
                })
                