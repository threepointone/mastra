
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveDisputeResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveDispute: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveDisputeResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dispute_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/disputes/{dispute_id}'].get({
                                query: {dispute_id,},
                                params: {dispute_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveDisputeResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveDisputeResponse`,
                                properties: RetrieveDisputeResponseFields,
                            });
                        },
                })
                