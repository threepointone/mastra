
                    import { EventHandler } from '@arkw/core';
                    import { EstimateFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveEstimate: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Estimate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { estimateId, estimateId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/estimates/{estimateId}'].get({
                                query: {estimateId,},
                                params: {estimateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Estimate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Estimate`,
                                properties: EstimateFields,
                            });
                        },
                })
                