
                    import { EventHandler } from '@arkw/core';
                    import { oidc-custom-subFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const oidc-oidc-custom-sub-template-for-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-oidc-custom-sub`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org, org,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/orgs/{org}/actions/oidc/customization/sub'].get({
                                query: {org,},
                                params: {org,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `oidc-custom-sub`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `oidc-custom-sub`,
                                properties: oidc-custom-subFields,
                            });
                        },
                })
                