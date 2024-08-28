
                    import { EventHandler } from '@arkw/core';
                    import { GetAllWebhooksResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllWebhooks: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllWebhooksResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { access_token,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/webhooks'].get({
                                query: {access_token,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllWebhooksResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllWebhooksResponse`,
                                properties: GetAllWebhooksResponseFields,
                            });
                        },
                })
                