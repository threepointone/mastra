
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pipeline_schedulesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const RepositoryPipelineSchedules: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_pipeline_schedules`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines_config/schedules'].get({
                                query: {workspace,repo_slug,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pipeline_schedules`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pipeline_schedules`,
                                properties: paginated_pipeline_schedulesFields,
                            });
                        },
                })
                