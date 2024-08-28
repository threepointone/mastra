
                    import { EventHandler } from '@arkw/core';
                    import { InterventionCommentFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getInterventionComment: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-InterventionComment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { interventionCommentId, interventionCommentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/intervention_comments/{interventionCommentId}'].get({
                                query: {interventionCommentId,},
                                params: {interventionCommentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `InterventionComment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `InterventionComment`,
                                properties: InterventionCommentFields,
                            });
                        },
                })
                