
                    import { EventHandler } from '@arkw/core';
                    import { snippetFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const snippet: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-snippet`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,encoded_id,node_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/snippets/{workspace}/{encoded_id}/{node_id}'].get({
                                
                                params: {workspace,encoded_id,node_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `snippet`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `snippet`,
                                properties: snippetFields,
                            });
                        },
                })
                