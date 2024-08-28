
                    import { EventHandler } from '@arkw/core';
                    import { integratedConnectUserInfoListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Connect_GetConnectAllUsers: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-integratedConnectUserInfoList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,connectId,count,domain_users_only,email_substring,start_position,status,user_name_substring, accountId,connectId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/connect/{connectId}/all/users'].get({
                                query: {accountId,connectId,count,domain_users_only,email_substring,start_position,status,user_name_substring,},
                                params: {accountId,connectId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `integratedConnectUserInfoList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `integratedConnectUserInfoList`,
                                properties: integratedConnectUserInfoListFields,
                            });
                        },
                })
                