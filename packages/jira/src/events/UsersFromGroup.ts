
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanUserDetailsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const UsersFromGroup: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanUserDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { groupname,groupId,includeInactiveUsers,startAt,maxResults,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/group/member'].get({
                                query: {groupname,groupId,includeInactiveUsers,startAt,maxResults,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanUserDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanUserDetails`,
                                properties: PageBeanUserDetailsFields,
                            });
                        },
                })
                