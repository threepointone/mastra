
                    import { EventHandler } from '@arkw/core';
                    import { PriorityFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Priority: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Priority`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/priority/{id}'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Priority`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Priority`,
                                properties: PriorityFields,
                            });
                        },
                })
                