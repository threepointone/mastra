
                    import { EventHandler } from '@arkw/core';
                    import { combined-billing-usageFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const billing_shared_storage_billing_org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-combined-billing-usage`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/settings/billing/shared-storage'].get({
                                query: {org,},
                                params: {org,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `combined-billing-usage`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `combined-billing-usage`,
                                properties: combined-billing-usageFields,
                            });
                        },
                })
                