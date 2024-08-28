
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanContextFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ContextsForFieldDeprecated: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanContext`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldId,startAt,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/field/{fieldId}/contexts'].get({
                                query: {fieldId,startAt,maxResults,},
                                params: {fieldId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanContext`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanContext`,
                                properties: PageBeanContextFields,
                            });
                        },
                })
                