
                    import { EventHandler } from '@arkw/core';
                    import { ProjectDataPoliciesFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Policies: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ProjectDataPolicies`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/data-policy/project'].get({
                                query: {ids,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectDataPolicies`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectDataPolicies`,
                                properties: ProjectDataPoliciesFields,
                            });
                        },
                })
                