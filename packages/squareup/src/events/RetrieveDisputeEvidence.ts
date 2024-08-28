
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveDisputeEvidenceResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveDisputeEvidence: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveDisputeEvidenceResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dispute_id,evidence_id, dispute_id,evidence_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/disputes/{dispute_id}/evidence/{evidence_id}'].get({
                                query: {dispute_id,evidence_id,},
                                params: {dispute_id,evidence_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveDisputeEvidenceResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveDisputeEvidenceResponse`,
                                properties: RetrieveDisputeEvidenceResponseFields,
                            });
                        },
                })
                