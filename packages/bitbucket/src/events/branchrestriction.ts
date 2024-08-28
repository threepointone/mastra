
                    import { EventHandler } from '@arkw/core';
                    import { branchrestrictionFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const branchrestriction: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-branchrestriction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}'].get({
                                
                                params: {workspace,repo_slug,id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `branchrestriction`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `branchrestriction`,
                                properties: branchrestrictionFields,
                            });
                        },
                })
                