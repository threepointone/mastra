
                    import { EventHandler } from '@arkw/core';
                    import { userInformationListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Users_GetUsers: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-userInformationList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,additional_info,alternate_admins_only,count,domain_users_only,email,email_substring,group_id,include_usersettings_for_csv,login_status,not_group_id,start_position,status,user_name_substring, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/users'].get({
                                query: {accountId,additional_info,alternate_admins_only,count,domain_users_only,email,email_substring,group_id,include_usersettings_for_csv,login_status,not_group_id,start_position,status,user_name_substring,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userInformationList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userInformationList`,
                                properties: userInformationListFields,
                            });
                        },
                })
                