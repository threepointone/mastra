
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersIdResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findUserById: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersIdResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/{id}'].get({
                                query: {id,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersIdResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersIdResponse`,
                                properties: Get2UsersIdResponseFields,
                            });
                        },
                })
                