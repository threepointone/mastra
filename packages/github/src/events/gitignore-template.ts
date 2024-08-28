
                    import { EventHandler } from '@arkw/core';
                    import { gitignore-templateFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const gitignore-template: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-gitignore-template`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { name, name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/gitignore/templates/{name}'].get({
                                query: {name,},
                                params: {name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `gitignore-template`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `gitignore-template`,
                                properties: gitignore-templateFields,
                            });
                        },
                })
                