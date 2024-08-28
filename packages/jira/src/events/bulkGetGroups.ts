
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanGroupDetailsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const bulkGetGroups: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanGroupDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,groupId,groupName,accessType,applicationKey,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/group/bulk'].get({
                                query: {startAt,maxResults,groupId,groupName,accessType,applicationKey,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanGroupDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanGroupDetails`,
                                properties: PageBeanGroupDetailsFields,
                            });
                        },
                })
                