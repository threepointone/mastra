
                    import { EventHandler } from '@arkw/core';
                    import { ProjectIssueSecurityLevelsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const SecurityLevelsForProject: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ProjectIssueSecurityLevels`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectKeyOrId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/project/{projectKeyOrId}/securitylevel'].get({
                                query: {projectKeyOrId,},
                                params: {projectKeyOrId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectIssueSecurityLevels`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectIssueSecurityLevels`,
                                properties: ProjectIssueSecurityLevelsFields,
                            });
                        },
                })
                