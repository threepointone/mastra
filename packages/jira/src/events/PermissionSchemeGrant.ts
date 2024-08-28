
                    import { EventHandler } from '@arkw/core';
                    import { PermissionGrantFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const PermissionSchemeGrant: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PermissionGrant`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { schemeId,permissionId,expand, schemeId,permissionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}'].get({
                                query: {schemeId,permissionId,expand,},
                                params: {schemeId,permissionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PermissionGrant`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PermissionGrant`,
                                properties: PermissionGrantFields,
                            });
                        },
                })
                