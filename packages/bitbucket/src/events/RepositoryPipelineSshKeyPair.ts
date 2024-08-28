
                    import { EventHandler } from '@arkw/core';
                    import { pipeline_ssh_key_pairFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const RepositoryPipelineSshKeyPair: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pipeline_ssh_key_pair`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair'].get({
                                query: {workspace,repo_slug,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pipeline_ssh_key_pair`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pipeline_ssh_key_pair`,
                                properties: pipeline_ssh_key_pairFields,
                            });
                        },
                })
                