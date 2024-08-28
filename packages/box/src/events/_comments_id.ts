
                    import { EventHandler } from '@arkw/core';
                    import { Comment--FullFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _comments_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Comment--Full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { comment_id,fields, comment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/comments/{comment_id}'].get({
                                query: {comment_id,fields,},
                                params: {comment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Comment--Full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Comment--Full`,
                                properties: Comment--FullFields,
                            });
                        },
                })
                