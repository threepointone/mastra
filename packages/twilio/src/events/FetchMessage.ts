
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_messageFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchMessage: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_message-FetchMessage`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,Sid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json'].get({
                                
                                params: {AccountSid,Sid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchMessage", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_message`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_message`,
                                properties: api_v2010_account_messageFields,
                            });
                        },
                })
                