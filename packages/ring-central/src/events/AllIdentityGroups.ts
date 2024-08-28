
                    import { EventHandler } from '@arkw/core';
                    import { GetAllIdentityGroupsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllIdentityGroups: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllIdentityGroupsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { firstname,lastname,email,uuid,ids,sort,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/identity_groups'].get({
                                query: {firstname,lastname,email,uuid,ids,sort,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllIdentityGroupsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllIdentityGroupsResponse`,
                                properties: GetAllIdentityGroupsResponseFields,
                            });
                        },
                })
                