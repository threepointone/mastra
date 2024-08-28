
                    import { EventHandler } from '@arkw/core';
                    import { code-scanning-alertFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const code-scanning-alert: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-code-scanning-alert`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,alert-number, owner,repo,alert_number,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}'].get({
                                query: {owner,repo,alert-number,},
                                params: {owner,repo,alert_number,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `code-scanning-alert`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `code-scanning-alert`,
                                properties: code-scanning-alertFields,
                            });
                        },
                })
                