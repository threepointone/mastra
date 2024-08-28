
                    import { EventHandler } from '@arkw/core';
                    import { milestoneFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const milestone: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-milestone`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,milestone_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}'].get({
                                
                                params: {workspace,repo_slug,milestone_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `milestone`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `milestone`,
                                properties: milestoneFields,
                            });
                        },
                })
                