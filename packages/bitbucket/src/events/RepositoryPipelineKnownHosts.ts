
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pipeline_known_hostsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const RepositoryPipelineKnownHosts: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_pipeline_known_hosts`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug, workspace,repo_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts'].get({
                                query: {workspace,repo_slug,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pipeline_known_hosts`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pipeline_known_hosts`,
                                properties: paginated_pipeline_known_hostsFields,
                            });
                        },
                })
                