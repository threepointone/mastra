
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanUserFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const findUsersByQuery: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanUser`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,startAt,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/user/search/query'].get({
                                query: {query,startAt,maxResults,},
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
                