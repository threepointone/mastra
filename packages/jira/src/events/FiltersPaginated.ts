
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanFilterDetailsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const FiltersPaginated: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanFilterDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { filterName,accountId,owner,groupname,groupId,projectId,id,orderBy,startAt,maxResults,expand,overrideSharePermissions,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/filter/search'].get({
                                query: {filterName,accountId,owner,groupname,groupId,projectId,id,orderBy,startAt,maxResults,expand,overrideSharePermissions,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanFilterDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanFilterDetails`,
                                properties: PageBeanFilterDetailsFields,
                            });
                        },
                })
                