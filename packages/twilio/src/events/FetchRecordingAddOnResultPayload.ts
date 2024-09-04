
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payloadFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchRecordingAddOnResultPayload: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload-FetchRecordingAddOnResultPayload`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,ReferenceSid,AddOnResultSid,Sid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json'].get({
                                
                                params: {AccountSid,ReferenceSid,AddOnResultSid,Sid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchRecordingAddOnResultPayload", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload`,
                                properties: api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payloadFields,
                            });
                        },
                })
                