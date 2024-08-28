
                    import { EventHandler } from '@arkw/core';
                    import { GetAllInterventionsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getAllInterventions: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllInterventionsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { thread_id,user_id,identity_group_id,identity_id,status,sort,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/interventions'].get({
                                query: {thread_id,user_id,identity_group_id,identity_id,status,sort,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllInterventionsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllInterventionsResponse`,
                                properties: GetAllInterventionsResponseFields,
                            });
                        },
                })
                