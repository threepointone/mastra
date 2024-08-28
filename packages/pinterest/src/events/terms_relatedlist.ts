
                    import { EventHandler } from '@arkw/core';
                    import { RelatedTermsFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const terms_relatedlist: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RelatedTerms`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_list_input_terms,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/terms/related'].get({
                                query: {query_list_input_terms,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RelatedTerms`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RelatedTerms`,
                                properties: RelatedTermsFields,
                            });
                        },
                })
                