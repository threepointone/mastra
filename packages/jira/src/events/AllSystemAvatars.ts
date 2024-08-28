
                    import { EventHandler } from '@arkw/core';
                    import { SystemAvatarsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AllSystemAvatars: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-SystemAvatars`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { type, type,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/avatar/{type}/system'].get({
                                query: {type,},
                                params: {type,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SystemAvatars`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SystemAvatars`,
                                properties: SystemAvatarsFields,
                            });
                        },
                })
                