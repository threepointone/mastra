
                    import { EventHandler } from '@arkw/core';
                    import { paginated_environmentsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const EnvironmentsForRepository: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_environments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/environments'].get({
                                query: {workspace,repo_slug,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_environments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_environments`,
                                properties: paginated_environmentsFields,
                            });
                        },
                })
                