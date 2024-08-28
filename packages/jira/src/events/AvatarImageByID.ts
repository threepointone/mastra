
                    import { EventHandler } from '@arkw/core';
                    import { StreamingResponseBodyFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AvatarImageByID: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-StreamingResponseBody`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { type,id,size,format, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/universal_avatar/view/type/{type}/avatar/{id}'].get({
                                query: {type,id,size,format,},
                                params: {type,id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `StreamingResponseBody`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `StreamingResponseBody`,
                                properties: StreamingResponseBodyFields,
                            });
                        },
                })
                