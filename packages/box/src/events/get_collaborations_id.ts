
                    import { EventHandler } from '@arkw/core';
                    import { CollaborationFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_collaborations_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Collaboration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { collaboration_id,fields, collaboration_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/collaborations/{collaboration_id}'].get({
                                query: {collaboration_id,fields,},
                                params: {collaboration_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Collaboration`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Collaboration`,
                                properties: CollaborationFields,
                            });
                        },
                })
                