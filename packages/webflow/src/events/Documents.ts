
                    import { EventHandler } from '@arkw/core';
                    import { DocumentsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Documents: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Documents`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { datasetId,nextToken,order,documentId,consentId,maxResults,sortBy,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/documents'].get({
                                query: {datasetId,nextToken,order,documentId,consentId,maxResults,sortBy,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Documents`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Documents`,
                                properties: DocumentsFields,
                            });
                        },
                })
                