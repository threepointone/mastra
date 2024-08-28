
                    import { EventHandler } from '@arkw/core';
                    import { PageOfCreateMetaIssueTypeWithFieldFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const CreateIssueMetaIssueTypeId: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageOfCreateMetaIssueTypeWithField`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdOrKey,issueTypeId,startAt,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId}'].get({
                                query: {projectIdOrKey,issueTypeId,startAt,maxResults,},
                                params: {projectIdOrKey,issueTypeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageOfCreateMetaIssueTypeWithField`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageOfCreateMetaIssueTypeWithField`,
                                properties: PageOfCreateMetaIssueTypeWithFieldFields,
                            });
                        },
                })
                