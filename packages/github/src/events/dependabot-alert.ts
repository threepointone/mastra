
                    import { EventHandler } from '@arkw/core';
                    import { dependabot-alertFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const dependabot-alert: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-dependabot-alert`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,dependabot-alert-number, owner,repo,alert_number,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/dependabot/alerts/{alert_number}'].get({
                                query: {owner,repo,dependabot-alert-number,},
                                params: {owner,repo,alert_number,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `dependabot-alert`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `dependabot-alert`,
                                properties: dependabot-alertFields,
                            });
                        },
                })
                