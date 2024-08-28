
                    import { EventHandler } from '@arkw/core';
                    import { VotesFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getVotes: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Votes`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey, issueIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/votes'].get({
                                query: {issueIdOrKey,},
                                params: {issueIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Votes`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Votes`,
                                properties: VotesFields,
                            });
                        },
                })
                