
                    import { EventHandler } from '@arkw/core';
                    import { tagFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const tag: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-tag`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/refs/tags/{name}'].get({
                                
                                params: {workspace,repo_slug,name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tag`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tag`,
                                properties: tagFields,
                            });
                        },
                })
                