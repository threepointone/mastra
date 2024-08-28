
                    import { EventHandler } from '@arkw/core';
                    import { paginated_workspacesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_workspaces: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_workspaces`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { role,q,sort, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces'].get({
                                query: {role,q,sort,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_workspaces`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_workspaces`,
                                properties: paginated_workspacesFields,
                            });
                        },
                })
                