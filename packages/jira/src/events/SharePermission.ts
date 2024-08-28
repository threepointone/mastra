
                    import { EventHandler } from '@arkw/core';
                    import { SharePermissionFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const SharePermission: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-SharePermission`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,permissionId, id,permissionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/filter/{id}/permission/{permissionId}'].get({
                                query: {id,permissionId,},
                                params: {id,permissionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SharePermission`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SharePermission`,
                                properties: SharePermissionFields,
                            });
                        },
                })
                