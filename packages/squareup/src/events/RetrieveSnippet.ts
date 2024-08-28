
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveSnippetResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveSnippet: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveSnippetResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { site_id, site_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/sites/{site_id}/snippet'].get({
                                query: {site_id,},
                                params: {site_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveSnippetResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveSnippetResponse`,
                                properties: RetrieveSnippetResponseFields,
                            });
                        },
                })
                