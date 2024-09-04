
                    import { EventHandler } from '@arkw/core';
                    import { api_v2010_account_queue_memberFields } from '../constants';
                    import { TwilioIntegration } from '..';

                    export const FetchMember: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-api_v2010_account_queue_member-FetchMember`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  AccountSid,QueueSid,CallSid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getApiClient({ referenceId })


                            // @ts-ignore
                            const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json'].get({
                                
                                params: {AccountSid,QueueSid,CallSid,} })

                            if (!response.ok) {
                              console.log("error in fetching FetchMember", {response});
                              return
                            }

                            const d = await response.json()

                            // @ts-ignore
                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `api_v2010_account_queue_member`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `api_v2010_account_queue_member`,
                                properties: api_v2010_account_queue_memberFields,
                            });
                        },
                })
                