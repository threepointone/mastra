
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanUserKeyFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const findUserKeysByQuery: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanUserKey`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,startAt,maxResult,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/user/search/query/key'].get({
                                query: {query,startAt,maxResult,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanUserKey`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanUserKey`,
                                properties: PageBeanUserKeyFields,
                            });
                        },
                })
                