
                    import { EventHandler } from '@arkw/core';
                    import { paginated_diffstatsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_diffstats: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_diffstats`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,spec,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/diffstat/{spec}'].get({
                                
                                params: {workspace,repo_slug,spec,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_diffstats`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_diffstats`,
                                properties: paginated_diffstatsFields,
                            });
                        },
                })
                