
                    import { EventHandler } from '@arkw/core';
                    import { paginated_changesetFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_changeset: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_changeset`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,revision, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/commits/{revision}'].get({
                                
                                params: {workspace,repo_slug,revision,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_changeset`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_changeset`,
                                properties: paginated_changesetFields,
                            });
                        },
                })
                