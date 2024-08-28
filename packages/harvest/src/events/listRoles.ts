
                    import { EventHandler } from '@arkw/core';
                    import { RolesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listRoles: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Roles`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { page,cursor,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/roles'].get({
                                query: {page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Roles`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Roles`,
                                properties: RolesFields,
                            });
                        },
                })
                