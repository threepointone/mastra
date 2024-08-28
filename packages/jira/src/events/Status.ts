
                    import { EventHandler } from '@arkw/core';
                    import { StatusDetailsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Status: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-StatusDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { idOrName, idOrName,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/status/{idOrName}'].get({
                                query: {idOrName,},
                                params: {idOrName,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `StatusDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `StatusDetails`,
                                properties: StatusDetailsFields,
                            });
                        },
                })
                