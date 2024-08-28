
                    import { EventHandler } from '@arkw/core';
                    import { snippet_commitFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const snippet_commit: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-snippet_commit`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,encoded_id,revision,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/snippets/{workspace}/{encoded_id}/commits/{revision}'].get({
                                
                                params: {workspace,encoded_id,revision,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `snippet_commit`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `snippet_commit`,
                                properties: snippet_commitFields,
                            });
                        },
                })
                