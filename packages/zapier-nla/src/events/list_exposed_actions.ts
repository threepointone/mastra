
                    import { EventHandler } from '@arkw/core';
                    import { ExposedActionResponseSchemaFields } from '../constants';
                    import { Zapier-nlaIntegration } from '..';

                    export const list_exposed_actions: EventHandler<Zapier-nlaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ExposedActionResponseSchema`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/api/v1/exposed/'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ExposedActionResponseSchema`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ExposedActionResponseSchema`,
                                properties: ExposedActionResponseSchemaFields,
                            });
                        },
                })
                