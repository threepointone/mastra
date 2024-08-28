
                    import { EventHandler } from '@arkw/core';
                    import { workspaceFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Workspace_GetWorkspace: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workspace`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,workspaceId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/workspaces/{workspaceId}'].get({
                                query: {accountId,workspaceId,},
                                params: {accountId,workspaceId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workspace`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workspace`,
                                properties: workspaceFields,
                            });
                        },
                })
                