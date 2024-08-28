
                    import { EventHandler } from '@arkw/core';
                    import { notaryJournalListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const NotaryJournals_GetNotaryJournals: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-notaryJournalList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { count,search_text,start_position,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/current_user/notary/journals'].get({
                                query: {count,search_text,start_position,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `notaryJournalList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `notaryJournalList`,
                                properties: notaryJournalListFields,
                            });
                        },
                })
                