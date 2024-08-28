
                    import { EventHandler } from '@arkw/core';
                    import { RulesLookupResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const Rules: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RulesLookupResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,max_results,pagination_token, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/tweets/search/stream/rules'].get({
                                query: {ids,max_results,pagination_token,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RulesLookupResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RulesLookupResponse`,
                                properties: RulesLookupResponseFields,
                            });
                        },
                })
                