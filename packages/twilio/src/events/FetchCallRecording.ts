
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_call_call_recordingFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchCallRecording: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_call_call_recording-FetchCallRecording`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,CallSid,Sid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json'].get({
                                
                                params: {AccountSid,CallSid,Sid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchCallRecording", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_call_call_recording`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_call_call_recording`,
                                properties: api_v2010_account_call_call_recordingFields,
                            });
                        },
                })
                