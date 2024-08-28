
                    import { EventHandler } from '@arkw/core';
                    import { paginated_workspace_membershipsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_workspace_memberships: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_workspace_memberships`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,workspace, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/permissions'].get({
                                query: {q,},
                                params: {workspace,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_workspace_memberships`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_workspace_memberships`,
                                properties: paginated_workspace_membershipsFields,
                            });
                        },
                })
                