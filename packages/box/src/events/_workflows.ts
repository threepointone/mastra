
                    import { EventHandler } from '@arkw/core';
                    import { WorkflowsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _workflows: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Workflows`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { folder_id,trigger_type,limit,marker,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workflows'].get({
                                query: {folder_id,trigger_type,limit,marker,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Workflows`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Workflows`,
                                properties: WorkflowsFields,
                            });
                        },
                })
                