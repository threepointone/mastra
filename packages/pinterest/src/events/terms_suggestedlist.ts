
                    import { EventHandler } from '@arkw/core';
                    import { TermsSuggestedResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const terms_suggestedlist: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TermsSuggestedResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_input_term,query_term_limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/terms/suggested'].get({
                                query: {query_input_term,query_term_limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TermsSuggestedResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TermsSuggestedResponse`,
                                properties: TermsSuggestedResponseFields,
                            });
                        },
                })
                