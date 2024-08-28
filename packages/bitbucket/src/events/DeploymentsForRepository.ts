
                    import { EventHandler } from '@arkw/core';
                    import { paginated_deploymentsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const DeploymentsForRepository: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_deployments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/deployments'].get({
                                query: {workspace,repo_slug,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_deployments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_deployments`,
                                properties: paginated_deploymentsFields,
                            });
                        },
                })
                