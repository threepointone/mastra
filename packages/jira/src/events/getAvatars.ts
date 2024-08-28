
                    import { EventHandler } from '@arkw/core';
                    import { AvatarsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getAvatars: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Avatars`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { type,entityId, type,entityId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/universal_avatar/type/{type}/owner/{entityId}'].get({
                                query: {type,entityId,},
                                params: {type,entityId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Avatars`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Avatars`,
                                properties: AvatarsFields,
                            });
                        },
                })
                