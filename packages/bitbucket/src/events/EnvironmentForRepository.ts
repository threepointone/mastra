
                    import { EventHandler } from '@arkw/core';
                    import { deployment_environmentFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const EnvironmentForRepository: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-deployment_environment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,environment_uuid, workspace,repo_slug,environment_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}'].get({
                                query: {workspace,repo_slug,environment_uuid,},
                                params: {workspace,repo_slug,environment_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `deployment_environment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `deployment_environment`,
                                properties: deployment_environmentFields,
                            });
                        },
                })
                