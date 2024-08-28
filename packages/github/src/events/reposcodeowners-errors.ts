
                    import { EventHandler } from '@arkw/core';
                    import { codeowners-errorsFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const reposcodeowners-errors: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-codeowners-errors`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,ref, owner,repo,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/codeowners/errors'].get({
                                query: {owner,repo,ref,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `codeowners-errors`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `codeowners-errors`,
                                properties: codeowners-errorsFields,
                            });
                        },
                })
                