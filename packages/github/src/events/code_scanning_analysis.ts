
                    import { EventHandler } from '@arkw/core';
                    import { code-scanning-analysisFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const code_scanning_analysis: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-code-scanning-analysis`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,analysis_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}'].get({
                                query: {owner,repo,analysis_id,},
                                params: {owner,repo,analysis_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `code-scanning-analysis`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `code-scanning-analysis`,
                                properties: code-scanning-analysisFields,
                            });
                        },
                })
                