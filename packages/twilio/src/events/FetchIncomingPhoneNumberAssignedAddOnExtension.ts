
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extensionFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchIncomingPhoneNumberAssignedAddOnExtension: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension-FetchIncomingPhoneNumberAssignedAddOnExtension`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,ResourceSid,AssignedAddOnSid,Sid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json'].get({
                                
                                params: {AccountSid,ResourceSid,AssignedAddOnSid,Sid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchIncomingPhoneNumberAssignedAddOnExtension", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension`,
                                properties: api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extensionFields,
                            });
                        },
                })
                