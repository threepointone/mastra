
                    import { EventHandler } from '@arkw/core';
                    import { AssetFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Asset: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Asset`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { assetId, assetId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/assets/{assetId}'].get({
                                query: {assetId,},
                                params: {assetId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Asset`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Asset`,
                                properties: AssetFields,
                            });
                        },
                })
                