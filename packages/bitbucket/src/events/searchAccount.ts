
                    import { EventHandler } from '@arkw/core';
                    import { search_result_pageFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const searchAccount: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-search_result_page`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { selected_user,search_query,page,pagelen, selected_user,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{selected_user}/search/code'].get({
                                query: {selected_user,search_query,page,pagelen,},
                                params: {selected_user,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `search_result_page`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `search_result_page`,
                                properties: search_result_pageFields,
                            });
                        },
                })
                