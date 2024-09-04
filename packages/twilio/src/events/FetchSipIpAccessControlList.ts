
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_sip_sip_ip_access_control_listFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchSipIpAccessControlList: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_sip_sip_ip_access_control_list-FetchSipIpAccessControlList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,Sid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json'].get({
                                
                                params: {AccountSid,Sid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchSipIpAccessControlList", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_sip_sip_ip_access_control_list`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_sip_sip_ip_access_control_list`,
                                properties: api_v2010_account_sip_sip_ip_access_control_listFields,
                            });
                        },
                })
                