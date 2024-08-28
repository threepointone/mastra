
                    import { EventHandler } from '@arkw/core';
                    import { GetAllInterventionCommentsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getAllInterventionComments: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllInterventionCommentsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { intervention_id,thread_id,user_id,identity_id,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/intervention_comments'].get({
                                query: {intervention_id,thread_id,user_id,identity_id,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllInterventionCommentsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllInterventionCommentsResponse`,
                                properties: GetAllInterventionCommentsResponseFields,
                            });
                        },
                })
                