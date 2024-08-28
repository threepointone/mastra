
                    import { EventHandler } from '@arkw/core';
                    import { promotion_codeFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetPromotionCodes: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-promotion_code`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { active,code,coupon,created,customer,ending_before,expand,limit,starting_after, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/promotion_codes'].get({
                                query: {active,code,coupon,created,customer,ending_before,expand,limit,starting_after,},
                                 })

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
                