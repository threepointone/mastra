
                    import { EventHandler } from '@arkw/core';
                    import { org-membershipFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const orgs_membership_for_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-org-membership`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,username, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/memberships/{username}'].get({
                                query: {org,username,},
                                params: {org,username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `org-membership`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `org-membership`,
                                properties: org-membershipFields,
                            });
                        },
                })
                