
                    import { EventHandler } from '@arkw/core';
                    import { paginated_snippetsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_snippets: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_snippets`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { role, workspace,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/snippets/{workspace}'].get({
                                query: {role,},
                                params: {workspace,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_snippets`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_snippets`,
                                properties: paginated_snippetsFields,
                            });
                        },
                })
                