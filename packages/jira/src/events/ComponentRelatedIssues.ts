
                    import { EventHandler } from '@arkw/core';
                    import { ComponentIssuesCountFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ComponentRelatedIssues: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ComponentIssuesCount`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/component/{id}/relatedIssueCounts'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ComponentIssuesCount`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ComponentIssuesCount`,
                                properties: ComponentIssuesCountFields,
                            });
                        },
                })
                