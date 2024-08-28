
                    import { EventHandler } from '@arkw/core';
                    import { EntityPropertyFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getWorklogProperty: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-EntityProperty`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,worklogId,propertyKey, issueIdOrKey,worklogId,propertyKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}'].get({
                                query: {issueIdOrKey,worklogId,propertyKey,},
                                params: {issueIdOrKey,worklogId,propertyKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EntityProperty`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EntityProperty`,
                                properties: EntityPropertyFields,
                            });
                        },
                })
                