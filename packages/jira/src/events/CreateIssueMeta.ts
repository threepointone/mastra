
                    import { EventHandler } from '@arkw/core';
                    import { IssueCreateMetadataFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const CreateIssueMeta: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IssueCreateMetadata`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIds,projectKeys,issuetypeIds,issuetypeNames,expand,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/createmeta'].get({
                                query: {projectIds,projectKeys,issuetypeIds,issuetypeNames,expand,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueCreateMetadata`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueCreateMetadata`,
                                properties: IssueCreateMetadataFields,
                            });
                        },
                })
                