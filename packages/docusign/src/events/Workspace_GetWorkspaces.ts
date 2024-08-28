
                    import { EventHandler } from '@arkw/core';
                    import { workspaceListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Workspace_GetWorkspaces: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-workspaceList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/workspaces'].get({
                                query: {accountId,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workspaceList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workspaceList`,
                                properties: workspaceListFields,
                            });
                        },
                })
                