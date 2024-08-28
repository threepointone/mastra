
                    import { EventHandler } from '@arkw/core';
                    import { Supported-Benefit-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-benefits-benefit_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Supported-Benefit-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  benefit_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/benefits/{benefit_id}'].get({
                                
                                params: {benefit_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Supported-Benefit-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Supported-Benefit-Object`,
                                properties: Supported-Benefit-ObjectFields,
                            });
                        },
                })
                