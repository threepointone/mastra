
                    import { EventHandler } from '@arkw/core';
                    import { SignRequestsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _sign_requests: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-SignRequests`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { marker,limit, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/sign_requests'].get({
                                query: {marker,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SignRequests`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SignRequests`,
                                properties: SignRequestsFields,
                            });
                        },
                })
                