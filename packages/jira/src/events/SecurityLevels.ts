
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanSecurityLevelFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const SecurityLevels: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanSecurityLevel`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,schemeId,onlyDefault,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issuesecurityschemes/level'].get({
                                query: {startAt,maxResults,id,schemeId,onlyDefault,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanSecurityLevel`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanSecurityLevel`,
                                properties: PageBeanSecurityLevelFields,
                            });
                        },
                })
                