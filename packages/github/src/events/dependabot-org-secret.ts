
                    import { EventHandler } from '@arkw/core';
                    import { organization-dependabot-secretFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const dependabot-org-secret: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-organization-dependabot-secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,secret-name, org,secret_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/dependabot/secrets/{secret_name}'].get({
                                query: {org,secret-name,},
                                params: {org,secret_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `organization-dependabot-secret`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `organization-dependabot-secret`,
                                properties: organization-dependabot-secretFields,
                            });
                        },
                })
                