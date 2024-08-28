
                    import { EventHandler } from '@arkw/core';
                    import { apiRequestLogsResultFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const APIRequestLog_GetRequestLogs: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-apiRequestLogsResult`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { encoding,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/diagnostics/request_logs'].get({
                                query: {encoding,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `apiRequestLogsResult`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `apiRequestLogsResult`,
                                properties: apiRequestLogsResultFields,
                            });
                        },
                })
                