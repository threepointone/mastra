
                    import { EventHandler } from '@arkw/core';
                    import { integratedUserInfoListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Connect_GetConnectUsers: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-integratedUserInfoList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,connectId,count,email_substring,list_included_users,start_position,status,user_name_substring, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/connect/{connectId}/users'].get({
                                query: {accountId,connectId,count,email_substring,list_included_users,start_position,status,user_name_substring,},
                                params: {accountId,connectId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `integratedUserInfoList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `integratedUserInfoList`,
                                properties: integratedUserInfoListFields,
                            });
                        },
                })
                