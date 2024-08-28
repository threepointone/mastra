
                    import { EventHandler } from '@arkw/core';
                    import { PermissionSchemeFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AssignedPermissionScheme: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PermissionScheme`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectKeyOrId,expand, projectKeyOrId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/project/{projectKeyOrId}/permissionscheme'].get({
                                query: {projectKeyOrId,expand,},
                                params: {projectKeyOrId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PermissionScheme`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PermissionScheme`,
                                properties: PermissionSchemeFields,
                            });
                        },
                })
                