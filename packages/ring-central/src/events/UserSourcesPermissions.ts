
                    import { EventHandler } from '@arkw/core';
                    import { UserSourcesPermissionsFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const UserSourcesPermissions: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UserSourcesPermissions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId, userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/sources_permissions'].get({
                                query: {userId,},
                                params: {userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UserSourcesPermissions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UserSourcesPermissions`,
                                properties: UserSourcesPermissionsFields,
                            });
                        },
                })
                