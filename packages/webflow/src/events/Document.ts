
                    import { EventHandler } from '@arkw/core';
                    import { DocumentFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Document: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Document`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { documentId, documentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/documents/{documentId}'].get({
                                query: {documentId,},
                                params: {documentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Document`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Document`,
                                properties: DocumentFields,
                            });
                        },
                })
                