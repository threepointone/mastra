
                    import { EventHandler } from '@arkw/core';
                    import { GetAllChannelsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllChannels: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetAllChannelsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { offset,limit, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/channels'].get({
                                query: {offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllChannelsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllChannelsResponse`,
                                properties: GetAllChannelsResponseFields,
                            });
                        },
                })
                