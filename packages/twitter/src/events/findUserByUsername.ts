
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersByUsernameUsernameResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findUserByUsername: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersByUsernameUsernameResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { username,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter, username,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/by/username/{username}'].get({
                                query: {username,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                params: {username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersByUsernameUsernameResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersByUsernameUsernameResponse`,
                                properties: Get2UsersByUsernameUsernameResponseFields,
                            });
                        },
                })
                