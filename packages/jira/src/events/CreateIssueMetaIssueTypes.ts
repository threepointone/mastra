
                    import { EventHandler } from '@arkw/core';
                    import { PageOfCreateMetaIssueTypesFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const CreateIssueMetaIssueTypes: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageOfCreateMetaIssueTypes`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdOrKey,startAt,maxResults, projectIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes'].get({
                                query: {projectIdOrKey,startAt,maxResults,},
                                params: {projectIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageOfCreateMetaIssueTypes`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageOfCreateMetaIssueTypes`,
                                properties: PageOfCreateMetaIssueTypesFields,
                            });
                        },
                })
                