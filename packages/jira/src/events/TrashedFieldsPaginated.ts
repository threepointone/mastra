
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanFieldFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const TrashedFieldsPaginated: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanField`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,query,expand,orderBy,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/field/search/trashed'].get({
                                query: {startAt,maxResults,id,query,expand,orderBy,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanField`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanField`,
                                properties: PageBeanFieldFields,
                            });
                        },
                })
                