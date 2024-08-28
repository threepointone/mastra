
                    import { EventHandler } from '@arkw/core';
                    import { PageOfStatusesFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const search: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageOfStatuses`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,projectId,startAt,maxResults,searchString,statusCategory,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/statuses/search'].get({
                                query: {expand,projectId,startAt,maxResults,searchString,statusCategory,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageOfStatuses`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageOfStatuses`,
                                properties: PageOfStatusesFields,
                            });
                        },
                })
                