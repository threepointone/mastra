
                    import { EventHandler } from '@arkw/core';
                    import { artifactFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_artifact: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-artifact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,artifact-id,artifact_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/artifacts/{artifact_id}'].get({
                                query: {owner,repo,artifact-id,},
                                params: {owner,repo,artifact_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `artifact`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `artifact`,
                                properties: artifactFields,
                            });
                        },
                })
                