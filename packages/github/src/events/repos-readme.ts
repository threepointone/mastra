
                    import { EventHandler } from '@arkw/core';
                    import { content-fileFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-readme: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-content-file`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,ref, owner,repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/readme'].get({
                                query: {owner,repo,ref,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `content-file`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `content-file`,
                                properties: content-fileFields,
                            });
                        },
                })
                