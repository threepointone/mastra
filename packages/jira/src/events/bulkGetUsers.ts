
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanUserFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const bulkGetUsers: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanUser`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,username,key,accountId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/user/bulk'].get({
                                query: {startAt,maxResults,username,key,accountId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanUser`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanUser`,
                                properties: PageBeanUserFields,
                            });
                        },
                })
                