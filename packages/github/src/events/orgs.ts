
                    import { EventHandler } from '@arkw/core';
                    import { organization-fullFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const orgs: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-organization-full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org, org,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/orgs/{org}'].get({
                                query: {org,},
                                params: {org,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `organization-full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `organization-full`,
                                properties: organization-fullFields,
                            });
                        },
                })
                