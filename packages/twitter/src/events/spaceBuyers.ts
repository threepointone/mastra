
                    import { EventHandler } from '@arkw/core';
                    import { Get2SpacesIdBuyersResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const spaceBuyers: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Get2SpacesIdBuyersResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,pagination_token,max_results,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/2/spaces/{id}/buyers'].get({
                                query: {id,pagination_token,max_results,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2SpacesIdBuyersResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2SpacesIdBuyersResponse`,
                                properties: Get2SpacesIdBuyersResponseFields,
                            });
                        },
                })
                