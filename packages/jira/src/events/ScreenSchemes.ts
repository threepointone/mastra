
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanScreenSchemeFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ScreenSchemes: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanScreenScheme`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,expand,queryString,orderBy, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/screenscheme'].get({
                                query: {startAt,maxResults,id,expand,queryString,orderBy,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanScreenScheme`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanScreenScheme`,
                                properties: PageBeanScreenSchemeFields,
                            });
                        },
                })
                