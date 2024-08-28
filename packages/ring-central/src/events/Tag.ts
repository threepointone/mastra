
                    import { EventHandler } from '@arkw/core';
                    import { TagFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Tag: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Tag`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { tagId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/tags/{tagId}'].get({
                                query: {tagId,},
                                params: {tagId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Tag`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Tag`,
                                properties: TagFields,
                            });
                        },
                })
                