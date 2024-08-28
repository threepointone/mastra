
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersByResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findUsersByUsername: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersByResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { usernames,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/by'].get({
                                query: {usernames,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersByResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersByResponse`,
                                properties: Get2UsersByResponseFields,
                            });
                        },
                })
                