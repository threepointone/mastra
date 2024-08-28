
                    import { EventHandler } from '@arkw/core';
                    import { ListDisputeEvidenceResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListDisputeEvidence: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListDisputeEvidenceResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dispute_id,cursor, dispute_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/disputes/{dispute_id}/evidence'].get({
                                query: {dispute_id,cursor,},
                                params: {dispute_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListDisputeEvidenceResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListDisputeEvidenceResponse`,
                                properties: ListDisputeEvidenceResponseFields,
                            });
                        },
                })
                