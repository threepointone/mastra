
                    import { EventHandler } from '@arkw/core';
                    import { effective_repo_branching_modelFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const effective_repo_branching_model: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-effective_repo_branching_model`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/effective-branching-model'].get({
                                
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `effective_repo_branching_model`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `effective_repo_branching_model`,
                                properties: effective_repo_branching_modelFields,
                            });
                        },
                })
                