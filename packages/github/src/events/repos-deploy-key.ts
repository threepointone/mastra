
                    import { EventHandler } from '@arkw/core';
                    import { deploy-keyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-deploy-key: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-deploy-key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,key-id, owner,repo,key_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/keys/{key_id}'].get({
                                query: {owner,repo,key-id,},
                                params: {owner,repo,key_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `deploy-key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `deploy-key`,
                                properties: deploy-keyFields,
                            });
                        },
                })
                