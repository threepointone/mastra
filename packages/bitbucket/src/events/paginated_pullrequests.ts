
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pullrequestsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_pullrequests: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_pullrequests`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { state, workspace,repo_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pullrequests'].get({
                                query: {state,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pullrequests`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pullrequests`,
                                properties: paginated_pullrequestsFields,
                            });
                        },
                })
                