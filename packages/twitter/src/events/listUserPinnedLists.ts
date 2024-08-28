
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersIdPinnedListsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const listUserPinnedLists: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersIdPinnedListsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,ListFieldsParameter,ListExpansionsParameter,UserFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/{id}/pinned_lists'].get({
                                query: {id,ListFieldsParameter,ListExpansionsParameter,UserFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersIdPinnedListsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersIdPinnedListsResponse`,
                                properties: Get2UsersIdPinnedListsResponseFields,
                            });
                        },
                })
                