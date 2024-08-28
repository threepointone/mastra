
                    import { EventHandler } from '@arkw/core';
                    import { pull-request-reviewFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const pulls_review: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pull-request-review`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,pull-number,review-id,pull_number,review_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'].get({
                                query: {owner,repo,pull-number,review-id,},
                                params: {owner,repo,pull_number,review_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pull-request-review`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pull-request-review`,
                                properties: pull-request-reviewFields,
                            });
                        },
                })
                