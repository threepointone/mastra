
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findUsersById: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users'].get({
                                query: {ids,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersResponse`,
                                properties: Get2UsersResponseFields,
                            });
                        },
                })
                