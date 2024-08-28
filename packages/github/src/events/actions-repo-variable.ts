
                    import { EventHandler } from '@arkw/core';
                    import { actions-variableFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-repo-variable: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-actions-variable`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,variable-name, owner,repo,name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/variables/{name}'].get({
                                query: {owner,repo,variable-name,},
                                params: {owner,repo,name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-variable`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-variable`,
                                properties: actions-variableFields,
                            });
                        },
                })
                