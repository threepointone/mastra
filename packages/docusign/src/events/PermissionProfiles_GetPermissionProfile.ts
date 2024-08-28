
                    import { EventHandler } from '@arkw/core';
                    import { permissionProfileFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const PermissionProfiles_GetPermissionProfile: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-permissionProfile`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,permissionProfileId,include, accountId,permissionProfileId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/permission_profiles/{permissionProfileId}'].get({
                                query: {accountId,permissionProfileId,include,},
                                params: {accountId,permissionProfileId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `permissionProfile`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `permissionProfile`,
                                properties: permissionProfileFields,
                            });
                        },
                })
                