
                    import { EventHandler } from '@arkw/core';
                    import { EntityPropertyFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueProperty: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EntityProperty`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,propertyKey, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}'].get({
                                query: {issueIdOrKey,propertyKey,},
                                params: {issueIdOrKey,propertyKey,} })

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
                