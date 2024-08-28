
                    import { EventHandler } from '@arkw/core';
                    import { Group--FullFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_groups_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Group--Full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { group_id,fields, group_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/groups/{group_id}'].get({
                                query: {group_id,fields,},
                                params: {group_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Group--Full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Group--Full`,
                                properties: Group--FullFields,
                            });
                        },
                })
                