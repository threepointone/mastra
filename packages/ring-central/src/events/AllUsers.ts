
                    import { EventHandler } from '@arkw/core';
                    import { GetAllUsersResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllUsers: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllUsersResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { email,category_id,identity_id,external_id,role_id,team_id,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users'].get({
                                query: {email,category_id,identity_id,external_id,role_id,team_id,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllUsersResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllUsersResponse`,
                                properties: GetAllUsersResponseFields,
                            });
                        },
                })
                