
                    import { EventHandler } from '@arkw/core';
                    import { PlanFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Plan: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Plan`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { planId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/plans/{planId}'].get({
                                query: {planId,},
                                params: {planId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Plan`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Plan`,
                                properties: PlanFields,
                            });
                        },
                })
                