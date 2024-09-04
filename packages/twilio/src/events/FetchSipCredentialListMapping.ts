
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_sip_sip_domain_sip_credential_list_mappingFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchSipCredentialListMapping: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_sip_sip_domain_sip_credential_list_mapping-FetchSipCredentialListMapping`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,DomainSid,Sid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json'].get({
                                
                                params: {AccountSid,DomainSid,Sid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchSipCredentialListMapping", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_sip_sip_domain_sip_credential_list_mapping`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_sip_sip_domain_sip_credential_list_mapping`,
                                properties: api_v2010_account_sip_sip_domain_sip_credential_list_mappingFields,
                            });
                        },
                })
                