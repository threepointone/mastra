
                    import { EventHandler } from '@arkw/core';
                    import { FoundUsersAndGroupsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const findUsersAndGroups: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FoundUsersAndGroups`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,maxResults,showAvatar,fieldId,projectId,issueTypeId,avatarSize,caseInsensitive,excludeConnectAddons,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/groupuserpicker'].get({
                                query: {query,maxResults,showAvatar,fieldId,projectId,issueTypeId,avatarSize,caseInsensitive,excludeConnectAddons,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FoundUsersAndGroups`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FoundUsersAndGroups`,
                                properties: FoundUsersAndGroupsFields,
                            });
                        },
                })
                