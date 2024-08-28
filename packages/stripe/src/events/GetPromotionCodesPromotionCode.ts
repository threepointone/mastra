
                    import { EventHandler } from '@arkw/core';
                    import { promotion_codeFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetPromotionCodesPromotionCode: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-promotion_code`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,promotion_code, promotion_code,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/promotion_codes/{promotion_code}'].get({
                                query: {expand,promotion_code,},
                                params: {promotion_code,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `promotion_code`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `promotion_code`,
                                properties: promotion_codeFields,
                            });
                        },
                })
                