
                    import { EventHandler } from '@arkw/core';
                    import { pipeline_known_hostFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const RepositoryPipelineKnownHost: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pipeline_known_host`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,known_host_uuid, workspace,repo_slug,known_host_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}'].get({
                                query: {workspace,repo_slug,known_host_uuid,},
                                params: {workspace,repo_slug,known_host_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pipeline_known_host`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pipeline_known_host`,
                                properties: pipeline_known_hostFields,
                            });
                        },
                })
                