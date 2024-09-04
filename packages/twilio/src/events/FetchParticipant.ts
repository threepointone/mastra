
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_conference_participantFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchParticipant: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_conference_participant-FetchParticipant`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,ConferenceSid,CallSid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json'].get({
                                
                                params: {AccountSid,ConferenceSid,CallSid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchParticipant", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_conference_participant`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_conference_participant`,
                                properties: api_v2010_account_conference_participantFields,
                            });
                        },
                })
                