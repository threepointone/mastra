
                    import { EventHandler } from '@arkw/core';
                    import { pipeline_cache_content_uriFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const RepositoryPipelineCacheContentURI: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pipeline_cache_content_uri`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,cache_uuid, workspace,repo_slug,cache_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri'].get({
                                query: {workspace,repo_slug,cache_uuid,},
                                params: {workspace,repo_slug,cache_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pipeline_cache_content_uri`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pipeline_cache_content_uri`,
                                properties: pipeline_cache_content_uriFields,
                            });
                        },
                })
                