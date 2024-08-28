
                    import { EventHandler } from '@arkw/core';
                    import { undefinedFields } from '../constants';
                    import { AttioIntegration } from '..';

                    export const v2Webhooks: EventHandler<AttioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-undefined`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { limit,offset,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/webhooks'].get({
                                query: {limit,offset,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `undefined`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `undefined`,
                                properties: undefinedFields,
                            });
                        },
                })
                