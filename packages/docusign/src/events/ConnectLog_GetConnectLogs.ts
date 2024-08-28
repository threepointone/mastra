
                    import { EventHandler } from '@arkw/core';
                    import { connectLogsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const ConnectLog_GetConnectLogs: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-connectLogs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,from_date,to_date, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/connect/logs'].get({
                                query: {accountId,from_date,to_date,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `connectLogs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `connectLogs`,
                                properties: connectLogsFields,
                            });
                        },
                })
                