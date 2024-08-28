
                    import { EventHandler } from '@arkw/core';
                    import { PermissionGrantsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const PermissionSchemeGrants: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PermissionGrants`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { schemeId,expand, schemeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/permissionscheme/{schemeId}/permission'].get({
                                query: {schemeId,expand,},
                                params: {schemeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PermissionGrants`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PermissionGrants`,
                                properties: PermissionGrantsFields,
                            });
                        },
                })
                