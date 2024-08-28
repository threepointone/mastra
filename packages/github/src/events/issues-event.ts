
                    import { EventHandler } from '@arkw/core';
                    import { issue-eventFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const issues-event: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issue-event`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,event_id, owner,repo,event_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/issues/events/{event_id}'].get({
                                query: {owner,repo,event_id,},
                                params: {owner,repo,event_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issue-event`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issue-event`,
                                properties: issue-eventFields,
                            });
                        },
                })
                