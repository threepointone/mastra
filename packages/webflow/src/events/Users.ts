
                    import { EventHandler } from '@arkw/core';
                    import { UsersFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Users: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Users`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { nextToken,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users'].get({
                                query: {nextToken,maxResults,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Users`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Users`,
                                properties: UsersFields,
                            });
                        },
                })
                