
                    import { EventHandler } from '@arkw/core';
                    import { IssueLimitReportResponseBeanFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueLimitReport: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IssueLimitReportResponseBean`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { isReturningKeys,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/limit/report'].get({
                                query: {isReturningKeys,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueLimitReportResponseBean`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueLimitReportResponseBean`,
                                properties: IssueLimitReportResponseBeanFields,
                            });
                        },
                })
                