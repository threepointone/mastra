
                    import { EventHandler } from '@arkw/core';
                    import { DataBundlesFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const DataBundles: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-DataBundles`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { modelId,status,nextToken,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/models/{modelId}/dataBundles'].get({
                                query: {modelId,status,nextToken,maxResults,},
                                params: {modelId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DataBundles`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DataBundles`,
                                properties: DataBundlesFields,
                            });
                        },
                })
                