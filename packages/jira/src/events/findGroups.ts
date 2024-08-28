
                    import { EventHandler } from '@arkw/core';
                    import { FoundGroupsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const findGroups: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FoundGroups`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,query,exclude,excludeId,maxResults,caseInsensitive,userName,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/groups/picker'].get({
                                query: {accountId,query,exclude,excludeId,maxResults,caseInsensitive,userName,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FoundGroups`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FoundGroups`,
                                properties: FoundGroupsFields,
                            });
                        },
                })
                