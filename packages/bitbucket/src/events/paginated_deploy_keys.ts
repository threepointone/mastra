
                    import { EventHandler } from '@arkw/core';
                    import { paginated_deploy_keysFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_deploy_keys: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_deploy_keys`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/deploy-keys'].get({
                                
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_deploy_keys`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_deploy_keys`,
                                properties: paginated_deploy_keysFields,
                            });
                        },
                })
                