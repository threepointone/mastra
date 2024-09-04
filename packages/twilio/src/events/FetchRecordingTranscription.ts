
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_recording_recording_transcriptionFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchRecordingTranscription: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_recording_recording_transcription-FetchRecordingTranscription`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,RecordingSid,Sid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json'].get({
                                
                                params: {AccountSid,RecordingSid,Sid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchRecordingTranscription", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_recording_recording_transcription`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_recording_recording_transcription`,
                                properties: api_v2010_account_recording_recording_transcriptionFields,
                            });
                        },
                })
                