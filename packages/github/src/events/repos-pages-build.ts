
                    import { EventHandler } from '@arkw/core';
                    import { page-buildFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-pages-build: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-page-build`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,build_id, owner,repo,build_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/pages/builds/{build_id}'].get({
                                query: {owner,repo,build_id,},
                                params: {owner,repo,build_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `page-build`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `page-build`,
                                properties: page-buildFields,
                            });
                        },
                })
                