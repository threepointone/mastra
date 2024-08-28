
                    import { EventHandler } from '@arkw/core';
                    import { Current-UserFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-me: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Current-User`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/me'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Current-User`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Current-User`,
                                properties: Current-UserFields,
                            });
                        },
                })
                