
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanPriorityWithSequenceFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const PrioritiesByPriorityScheme: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanPriorityWithSequence`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,schemeId, schemeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/priorityscheme/{schemeId}/priorities'].get({
                                query: {startAt,maxResults,schemeId,},
                                params: {schemeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanPriorityWithSequence`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanPriorityWithSequence`,
                                properties: PageBeanPriorityWithSequenceFields,
                            });
                        },
                })
                