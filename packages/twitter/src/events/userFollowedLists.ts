
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersIdFollowedListsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const userFollowedLists: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Get2UsersIdFollowedListsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,max_results,pagination_token,ListFieldsParameter,ListExpansionsParameter,UserFieldsParameter, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/2/users/{id}/followed_lists'].get({
                                query: {id,max_results,pagination_token,ListFieldsParameter,ListExpansionsParameter,UserFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersIdFollowedListsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersIdFollowedListsResponse`,
                                properties: Get2UsersIdFollowedListsResponseFields,
                            });
                        },
                })
                