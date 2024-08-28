
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanUiModificationDetailsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const UiModifications: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanUiModificationDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,expand,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/uiModifications'].get({
                                query: {startAt,maxResults,expand,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanUiModificationDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanUiModificationDetails`,
                                properties: PageBeanUiModificationDetailsFields,
                            });
                        },
                })
                