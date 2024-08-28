
                    import { EventHandler } from '@arkw/core';
                    import { connectLogFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const ConnectLog_GetConnectLog: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-connectLog`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,logId,additional_info, accountId,logId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/connect/logs/{logId}'].get({
                                query: {accountId,logId,additional_info,},
                                params: {accountId,logId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `connectLog`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `connectLog`,
                                properties: connectLogFields,
                            });
                        },
                })
                