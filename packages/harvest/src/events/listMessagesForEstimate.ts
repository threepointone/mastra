
                    import { EventHandler } from '@arkw/core';
                    import { EstimateMessagesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listMessagesForEstimate: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EstimateMessages`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { estimateId,updated_since,page,cursor,per_page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/estimates/{estimateId}/messages'].get({
                                query: {estimateId,updated_since,page,cursor,per_page,},
                                params: {estimateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EstimateMessages`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EstimateMessages`,
                                properties: EstimateMessagesFields,
                            });
                        },
                })
                