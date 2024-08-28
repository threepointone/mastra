
                    import { EventHandler } from '@arkw/core';
                    import { LogFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Log: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Log`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { logId, logId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/logs/{logId}'].get({
                                query: {logId,},
                                params: {logId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Log`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Log`,
                                properties: LogFields,
                            });
                        },
                })
                