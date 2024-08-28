
                    import { EventHandler } from '@arkw/core';
                    import { PageOfCommentsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Comments: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageOfComments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,startAt,maxResults,orderBy,expand, issueIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/comment'].get({
                                query: {issueIdOrKey,startAt,maxResults,orderBy,expand,},
                                params: {issueIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageOfComments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageOfComments`,
                                properties: PageOfCommentsFields,
                            });
                        },
                })
                