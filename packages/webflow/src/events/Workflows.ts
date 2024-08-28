
                    import { EventHandler } from '@arkw/core';
                    import { WorkflowsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Workflows: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Workflows`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { nextToken,maxResults,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workflows'].get({
                                query: {nextToken,maxResults,},
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
                