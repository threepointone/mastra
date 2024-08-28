
                    import { EventHandler } from '@arkw/core';
                    import { commitstatusFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const commitstatus: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-commitstatus`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,commit,key, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}'].get({
                                
                                params: {workspace,repo_slug,commit,key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `commitstatus`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `commitstatus`,
                                properties: commitstatusFields,
                            });
                        },
                })
                