
                    import { EventHandler } from '@arkw/core';
                    import { snippet_commentFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const snippet_comment: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-snippet_comment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,encoded_id,comment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/snippets/{workspace}/{encoded_id}/comments/{comment_id}'].get({
                                
                                params: {workspace,encoded_id,comment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `snippet_comment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `snippet_comment`,
                                properties: snippet_commentFields,
                            });
                        },
                })
                