
                    import { EventHandler } from '@arkw/core';
                    import { FoundUsersFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const findUsersForPicker: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-FoundUsers`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,maxResults,showAvatar,exclude,excludeAccountIds,avatarSize,excludeConnectUsers,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/user/picker'].get({
                                query: {query,maxResults,showAvatar,exclude,excludeAccountIds,avatarSize,excludeConnectUsers,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FoundUsers`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FoundUsers`,
                                properties: FoundUsersFields,
                            });
                        },
                })
                