
                    import { EventHandler } from '@arkw/core';
                    import { actions-cache-usage-org-enterpriseFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-actions-cache-usage-for-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-actions-cache-usage-org-enterprise`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org, org,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/orgs/{org}/actions/cache/usage'].get({
                                query: {org,},
                                params: {org,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-cache-usage-org-enterprise`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-cache-usage-org-enterprise`,
                                properties: actions-cache-usage-org-enterpriseFields,
                            });
                        },
                })
                