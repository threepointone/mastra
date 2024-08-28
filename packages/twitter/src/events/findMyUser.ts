
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersMeResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findMyUser: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersMeResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/me'].get({
                                query: {UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersMeResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersMeResponse`,
                                properties: Get2UsersMeResponseFields,
                            });
                        },
                })
                