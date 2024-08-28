
                    import { EventHandler } from '@arkw/core';
                    import { dependabot-public-keyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const dependabot_org_public_key: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-dependabot-public-key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/dependabot/secrets/public-key'].get({
                                query: {org,},
                                params: {org,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `dependabot-public-key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `dependabot-public-key`,
                                properties: dependabot-public-keyFields,
                            });
                        },
                })
                