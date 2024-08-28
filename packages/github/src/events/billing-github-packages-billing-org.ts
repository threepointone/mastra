
                    import { EventHandler } from '@arkw/core';
                    import { packages-billing-usageFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const billing-github-packages-billing-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-packages-billing-usage`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org, org,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/orgs/{org}/settings/billing/packages'].get({
                                query: {org,},
                                params: {org,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `packages-billing-usage`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `packages-billing-usage`,
                                properties: packages-billing-usageFields,
                            });
                        },
                })
                